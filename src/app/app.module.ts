import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyCustomModuleModule } from './my-custom-module/my-custom-module.module';
import { DefaultComponent } from './default/default.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [
  { path: '', component: DefaultComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent }
]

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    MyCustomModuleModule, 
    RouterModule.forRoot(appRoutes, { enableTracing : true })
    ],
  declarations: [ AppComponent, HelloComponent, DefaultComponent, HomeComponent, ContactComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
