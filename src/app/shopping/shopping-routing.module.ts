import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { 
	CartComponent,
	PurchaseComponent,
	PurchasesComponent,
	ShopComponent,
	ShoppingComponent
} from './components';

import { LoginGuard } from '../shared';

export const ShoppingRoutes: Routes = [
	{
		path: 'shop',
		component: ShoppingComponent,
		children: [
		  {
			path: '', 
			component: ShopComponent,
			canActivate: [ LoginGuard ]
		  },
		  {
			path: 'cart', 
			component: CartComponent,
			canActivate: [ LoginGuard ]
		  },
		  {
			path: 'purchases', 
			component: PurchasesComponent,
			canActivate: [ LoginGuard ]
		  },
		  {
			path: 'purchases/:purchaseId', 
			component: PurchaseComponent,
			canActivate: [ LoginGuard ]
		  }
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(ShoppingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShoppingRoutingModule {
}
