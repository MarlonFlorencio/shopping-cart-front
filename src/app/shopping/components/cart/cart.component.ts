import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart = new Cart();
  dataSource: MatTableDataSource<CartItem> = new MatTableDataSource<CartItem>([]); 
  colunas: string[] = ['name', 'quantity', 'price', 'total', 'action'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private cartService: CartService) { }

  ngOnInit() {
    this.getItem();
  }

  getItem() {
    this.cartService.getDraftedCart()
      .subscribe(
        data => {
          this.setCart(data)
        },
        err => {
          let msg: string = "Error to get cart";
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  }

  addOneItem(itemId: string) {
    this.cartService.addItem(itemId)
      .subscribe(
        data => {
          this.setCart(data)
          const msg: string = "Item added";
          this.snackBar.open(msg, "Success", { duration: 5000 });
        },
        err => {
          let msg: string = "Error to remove item from cart";
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  }

  removeItem(itemId: string) {
    this.cartService.removeItem(itemId)
      .subscribe(
        data => {
          this.setCart(data)
          const msg: string = "Item removed";
          this.snackBar.open(msg, "Success", { duration: 5000 });
        },
        err => {
          let msg: string = "Error to remove item from cart";
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  }

  removeOneItem(itemId: string) {
    this.cartService.removeOneItem(itemId)
      .subscribe(
        data => {
          this.setCart(data)
          const msg: string = "Item removed";
          this.snackBar.open(msg, "Success", { duration: 5000 });
        },
        err => {
          let msg: string = "Error to remove item from cart";
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  }

  private setCart(data: any) {
    this.cart = data;
    const records = this.cart.items as CartItem[];
    this.dataSource = new MatTableDataSource<CartItem>(records);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  closeCart() {
    this.cartService.closeCart()
      .subscribe(
        data => {
          const msg: string = "Cart closed";
          this.snackBar.open(msg, "Success", { duration: 5000 });
          this.router.navigate(['/shop/purchases']);
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

  hasItem() {
    return this.dataSource.data.length > 0
  }

  disableRemoveOne(cartItem: CartItem) {
    return cartItem.quantity < 2
  }

}