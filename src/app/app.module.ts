import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotoShareComponent } from './features/photoShare/photo-share/photo-share.component';
import { PhotoShareListeComponent } from './features/photoShare/photo-share-liste/photo-share-liste.component';
import { PhotosMainComponent } from './features/photoShare/photos-main/photos-main.component';

import * as fr_be from "@angular/common/locales/fr-BE";
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';

import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { InternCalendarComponent } from './features/intern-calendar/intern-calendar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { WelcomeComponent } from './shared/component/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    NotFoundComponent,
    PhotosMainComponent,
    PhotoShareComponent,
    PhotoShareListeComponent,
    InternCalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
