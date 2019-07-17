import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyCustomModuleModule } from './my-custom-module/my-custom-module.module';
import { DefaultComponent } from './default/default.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuRoutingModule } from './menu-routing/menu-routing.module';

const appRoutes:Routes = [
  { path: '', component: DefaultComponent },
  { path: 'home', loadChildren: './menu-routing.module#AppModule' },
  { path: 'contact', loadChildren: './menu-routing.module#AppModule' },
  { path: 'about', loadChildren: './menu-routing.module#AppModule' }
]

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    MyCustomModuleModule, 
    RouterModule.forRoot(appRoutes, { enableTracing : true })
    ],
  declarations: [ AppComponent, HelloComponent, DefaultComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
