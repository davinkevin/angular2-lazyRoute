import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lazy', loadChildren: 'app/lazy/lazy.module#LazyModule' },
  { path: 'another', loadChildren: 'app/another/another.module#AnotherModule' }
];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot(appRoutes, /*{preloadingStrategy: PreloadAllModules}*/)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
