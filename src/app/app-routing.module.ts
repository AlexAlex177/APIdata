import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { GetcallComponent } from './getcall/getcall.component';
import { PostcallComponent } from './postcall/postcall.component';

const routes: Routes = [
  {path:"getcall",component:GetcallComponent},
  {path:"postcall",component:PostcallComponent},
  {path:"form",component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
