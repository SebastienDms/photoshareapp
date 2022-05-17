import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotoShareComponent } from './photo-share/photo-share.component';
import * as fr_be from "@angular/common/locales/fr-BE";
import { PhotoShareListeComponent } from './photo-share-liste/photo-share-liste.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { InternCalendarComponent } from './intern-calendar/intern-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoShareComponent,
    PhotoShareListeComponent,
    HeaderComponent,
    FooterComponent,
    InternCalendarComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
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
