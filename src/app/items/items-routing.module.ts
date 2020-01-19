import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { 
	EditItemComponent,
	ListItemsComponent, 
	NewItemComponent,
	ItemsComponent
} from './components';

import { AdminGuard } from '../shared';

export const ItemsRoutes: Routes = [
	{
		path: 'items',
		component: ItemsComponent,
		canActivate: [ AdminGuard ],
		children: [
		  {
			path: '', 
			component: ListItemsComponent
		  },
		  {
			path: 'new-item', 
			component: NewItemComponent 
		  },
		  {
			path: 'edit-item/:itemId', 
			component: EditItemComponent 
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
