import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhotoShareListeComponent } from './photo-share-liste/photo-share-liste.component';
import { PhotoShareComponent } from './photo-share/photo-share.component';
import { PhotosMainComponent } from './photos-main/photos-main.component';

const routes: Routes = [
  {
    path: 'photos', component: PhotosMainComponent
  },
  {
    path: 'photos/list', component: PhotoShareListeComponent
  },
  {
    path: 'photo/:id', component: PhotoShareComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class PhotoShareRoutingModule { }
