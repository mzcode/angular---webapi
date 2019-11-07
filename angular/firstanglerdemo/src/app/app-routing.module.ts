import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MysecondComponent } from './mysecond/mysecond.component';
import { MynotfoundComponent } from './mynotfound/mynotfound.component';


const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
