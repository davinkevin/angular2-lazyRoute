import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {AnotherComponent} from './another.component';

const routes: Routes = [
  { path: '', component: AnotherComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnotherComponent]
})
export class AnotherModule { }
