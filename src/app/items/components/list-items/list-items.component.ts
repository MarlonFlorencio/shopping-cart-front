import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { 
  MatSelect, 
  MatTableDataSource,
  MatSnackBar,
  MatDialog, 
  MatDialogRef, 
  MAT_DIALOG_DATA,
  PageEvent,
  Sort
} from '@angular/material';

import { 
  ItemsService,
  Item
} from '../../../shared';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  dataSource: MatTableDataSource<Item>;
  colunas: string[] = ['name', 'price', 'action'];
  itemName: string;
  totalElements: number;

  itemsList: Item[];
  @ViewChild(MatSelect, { static: true }) matSelect: MatSelect;
  form: FormGroup;

  private page: number;
  private pageSize: number;
  private propertyOrder: string;
  private direction: string;

  constructor(
  	private itemsService: ItemsService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.page = 0;
    this.pageSize = 5;
    this.itemName = this.itemNameSession ? this.itemNameSession : '';
    this.propertyOrderDefault();
    this.gerarForm();
    this.showItems();
  }

  gerarForm() {
    this.form = this.fb.group({
      itemName: [this.itemName, []]
    });
  }

  propertyOrderDefault() {
    this.propertyOrder = 'name';
    this.direction = 'ASC';
  }

  get itemNameSession(): string {
    return sessionStorage['itemName'] || false;
  }

  showItems() {

    this.itemName = this.form.value.itemName;
    sessionStorage['itemName'] = this.itemName;
    
    const result = this.itemName.trim() ? 
      this.itemsService.findByName(this.itemName,this.page, this.pageSize, this.propertyOrder, this.direction ) :
      this.itemsService.findAll(this.page, this.pageSize, this.propertyOrder, this.direction);

    result
      .subscribe(
        data => {
          this.totalElements = data.page.totalElements;
          const records =  data._embedded  && data._embedded.itemDtoes ?  data._embedded.itemDtoes as Item[] : [];
          this.dataSource = new MatTableDataSource<Item>(records);
        },
        err => {
          const msg: string = "An error occurred while requesting items";
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  }

  paginate(pageEvent: PageEvent) {
    this.page = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize
    this.showItems();
  }

  ordenar(sort: Sort) {
    if (sort.direction == '') {
      this.propertyOrderDefault();
    } else {
      this.propertyOrder = sort.active;
      this.direction = sort.direction.toUpperCase();
    }
    this.showItems();
  }

  removeDialog(itemId: string) {  
    const dialog = this.dialog.open(ConfirmarDialog, {});
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.remove(itemId);
      }
    });
  }

  remove(itemId: string) {
    this.itemsService.remove(itemId)
      .subscribe(
        data => {
          const msg: string = "Item removed";
          this.snackBar.open(msg, "Success", { duration: 5000 });
          this.showItems();
        },
        err => {
          let msg: string = "Please try again in a few moments.";
          if (err.status == 400) {
            msg = err.error && err.error.message ? err.error.message : 'Bad Request' ;
          }
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  }

}

@Component({
  selector: 'confirmar-dialog',
  template: `
    <h1 mat-dialog-title>Do you really want to remove this item?</h1>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false" tabindex="-1">
        No
      </button>
      <button mat-button [mat-dialog-close]="true" tabindex="2">
        Yes
      </button>
    </div>
  `,
})
export class ConfirmarDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}