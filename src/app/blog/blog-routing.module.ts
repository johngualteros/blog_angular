import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Post1Component } from './post1/post1.component';

const routes: Routes = [
  {path: 'post1', component: Post1Component},
  {path: '', redirectTo: 'post1', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
