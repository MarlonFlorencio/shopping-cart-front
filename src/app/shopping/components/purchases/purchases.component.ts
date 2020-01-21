import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import { 
  MatSelect, 
  MatTableDataSource,
  MatSnackBar,
  PageEvent,
  Sort
} from '@angular/material';

import { 
  CartService,
  Cart
} from '../../../shared';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  dataSource: MatTableDataSource<Cart>;
  colunas: string[] = ['date', 'total', 'action'];
  totalElements: number;
  cartList: Cart[];

  @ViewChild(MatSelect, { static: true }) matSelect: MatSelect;

  private page: number;
  private pageSize: number;
  private propertyOrder: string;
  private direction: string;

  constructor(
  	private cartService: CartService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.page = 0;
    this.pageSize = 5;
    this.propertyOrderDefault();
    this.showItems();
  }

  propertyOrderDefault() {
    this.propertyOrder = 'date';
    this.direction = 'desc';
  }

  showItems() {
    this.cartService.getClosedCarts(this.page, this.pageSize, this.propertyOrder, this.direction)
    .subscribe(
      data => {
        this.totalElements = data.page.totalElements;
        const records =  data._embedded  && data._embedded.cartDtoes ?  data._embedded.cartDtoes as Cart[] : [];
        this.dataSource = new MatTableDataSource<Cart>(records);
      },
      err => {
        const msg: string = "An error occurred while requesting purchases";
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

}