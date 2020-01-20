import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { CurrencyPipe } from '@angular/common';

import { 
  ItemsService,
  Item
} from '../../../shared';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  form: FormGroup;
  itemId: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
    private itemsService: ItemsService,
    private currency: CurrencyPipe) { }

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('itemId');
    this.gerarForm();
    this.getItem();
  }

  gerarForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required,  Validators.pattern(/^\$?\d+((,\d{3})+)?(\.\d+)?$/)]]
    });
  }

  getItem() {
    this.itemsService.findById(this.itemId)
      .subscribe(
        data => {
          this.form.get('name').setValue(data.name);
          const price = this.currency.transform(data.price).replace('$','');
          this.form.get('price').setValue(price);
        },
        err => {
          let msg: string = "Error to get item";
          this.snackBar.open(msg, "Erro", { duration: 5000 });
          this.router.navigate(['/items']);
        }
      );
  }

  save() {
    if (this.form.invalid) return;

    const item = new Item(
      this.form.value.name,
      this.form.value.price.replace(',',''),
      this.itemId
    );

    this.itemsService.update(item)
      .subscribe(
        data => {
          const msg: string = "Item updated";
          this.snackBar.open(msg, "Success", { duration: 5000 });
          this.router.navigate(['/items']);
        },
        err => {
          let msg: string = "Please try again in a few moments.";
          if (err.status == 400) {
            console.log(err);
            msg = err.error.errors.join(' ');
          }
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  }

}