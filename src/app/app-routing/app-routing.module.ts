import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/component/not-found/not-found.component';
import { WelcomeComponent } from '../shared/component/welcome/welcome.component';
import { PhotosMainComponent } from '../features/photoShare/photos-main/photos-main.component';
import { PhotoShareListeComponent } from '../features/photoShare/photo-share-liste/photo-share-liste.component';
import { PhotoShareComponent } from '../features/photoShare/photo-share/photo-share.component';
import { InternCalendarComponent } from '../features/intern-calendar/intern-calendar.component';

const routes: Routes = [
  {
    path: 'home', component: WelcomeComponent
  },
  {
    path: 'photos', component: PhotosMainComponent
  },
  {
    path: 'photos/list', component: PhotoShareListeComponent
  },
  {
    path: 'photo/:id', component: PhotoShareComponent
  },
  {
    path: 'calendrier', component: InternCalendarComponent
  },
  {
    path: '', pathMatch:'full', redirectTo: '/home'
  },
  {
    path: '**', component: NotFoundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
