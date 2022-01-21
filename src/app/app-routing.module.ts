import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { RegComponent } from './reg/reg.component';
import { TqComponent } from './tq/tq.component';

const routes: Routes = [
  { path:"",component:RegComponent },
  { path:"Register",component:RegComponent },
  { path:"Tq",component:TqComponent },
  { path:"**",component:RegComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HeaderComponent, RegComponent, TqComponent]