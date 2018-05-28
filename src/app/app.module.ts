import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashModule } from './dash/dash.module'
import { EntryModule } from './entry/entry.module'
import { CoreComponentsModule } from './core-components/core-components.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DashModule,
    EntryModule,
    CoreComponentsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
