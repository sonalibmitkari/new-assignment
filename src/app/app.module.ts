import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DalogBoxOnEditComponent } from './dalog-box-on-edit/dalog-box-on-edit.component';
import { DialogBoxOnDeleteComponent } from './dialog-box-on-delete/dialog-box-on-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    DalogBoxOnEditComponent,
    DialogBoxOnDeleteComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
