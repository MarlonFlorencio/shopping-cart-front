import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { 
  ItemsService,
  Item
} from '../../../shared';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
    private itemsService: ItemsService) { }

  ngOnInit() {
  	this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required,  Validators.pattern(/^\$?\d+((,\d{3})+)?(\.\d+)?$/)]]
    });
  }

  save() {
    if (this.form.invalid) return;

    const item = new Item(
      this.form.value.name,
      this.form.value.price.replace(',','')
    );

    this.itemsService.create(item)
      .subscribe(
        data => {
          const msg: string = "Item created";
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