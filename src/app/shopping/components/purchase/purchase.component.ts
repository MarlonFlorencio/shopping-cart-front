import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { 
  MatSnackBar,
  MatTableDataSource,
  MatSort,
  MatPaginator
} from '@angular/material';

import { 
  CartService,
  Cart,
  CartItem
} from '../../../shared';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  purchaseId: string;
  cart: Cart = new Cart();
  dataSource: MatTableDataSource<CartItem>;
  colunas: string[] = ['name', 'quantity', 'price', 'total'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit() {
    this.purchaseId = this.route.snapshot.paramMap.get('purchaseId');
    this.getItem();
  }

  getItem() {
    this.cartService.findById(this.purchaseId)
      .subscribe(
        data => {
          this.cart = data;
          const records = this.cart.items as CartItem[];
          this.dataSource = new MatTableDataSource<CartItem>(records);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        err => {
          let msg: string = "Error to get cart";
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  }

}