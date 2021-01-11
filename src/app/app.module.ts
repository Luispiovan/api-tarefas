import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import {CommonModule} from '@angular/common';

import { HomePage } from "./home/home.component";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ],
  imports: [
    BrowserModule,
    NgModule,
    CommonModule,
    IonicModule.forRoot(MyApp)],
  bootstrap: [
    IonicApp
    ],
  entryComponents: [
    MyApp, 
    AboutPage, 
    ContactPage, 
    HomePage, 
    TabsPage
    ],
  providers: [
    { provide: 
      ErrorHandler, 
      useClass: 
      IonicErrorHandler 
    }
    ]
})
