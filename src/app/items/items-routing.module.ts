import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { 
	EditItemComponent,
	ListItemsComponent, 
	NewItemComponent,
	ItemsComponent
} from './components';

import { AdminGuard, LoginGuard } from '../shared';

export const ItemsRoutes: Routes = [
	{
		path: 'items',
		component: ItemsComponent,
		children: [
		  {
			path: '', 
			component: ListItemsComponent,
			canActivate: [ LoginGuard, AdminGuard ]
		  },
		  {
			path: 'new-item', 
			component: NewItemComponent,
			canActivate: [ LoginGuard, AdminGuard ],
		  },
		  {
			path: 'edit-item/:itemId', 
			component: EditItemComponent,
			canActivate: [ LoginGuard, AdminGuard ],
		  }
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(ItemsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ItemsRoutingModule {
}
