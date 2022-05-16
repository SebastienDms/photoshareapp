import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotoShareComponent } from './photo-share/photo-share.component';
import * as fr_be from "@angular/common/locales/fr-BE";

@NgModule({
  declarations: [
    AppComponent,
    PhotoShareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-BE'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(){
    registerLocaleData(fr_be.default);
  }
}
