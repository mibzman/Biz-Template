import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxPermissionsModule } from 'ngx-permissions';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from './services/services.module'
import { EntryModule } from './entry/entry.module'

import { EntryGuard } from './entry.guard'

const UI = [
  AppRoutingModule,
  EntryModule,
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    UI,
    NgxPermissionsModule.forRoot(),
    ServicesModule.forRoot(),
  ],
  providers: [
    EntryGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
