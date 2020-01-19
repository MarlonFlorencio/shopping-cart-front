import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { 
	RegistrationWrapperComponent, 
	RegistrationComponent 
} from './components';

export const RegisterRoutes: Routes = [
	{
		path: 'registration',
		component: RegistrationWrapperComponent,
		children: [
		  {
			path: '', 
			component: RegistrationComponent 
		  }
		]
	}
];

@NgModule({
  imports: [
  	RouterModule.forChild(RegisterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RegisterRoutingModule {
}


