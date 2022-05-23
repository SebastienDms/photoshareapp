import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoShareListeComponent } from './photo-share-liste/photo-share-liste.component';
import { PhotoShareComponent } from './photo-share/photo-share.component';
import { PhotosMainComponent } from './photos-main/photos-main.component';
import { PhotoShareRoutingModule } from './photo-share-routing.module';



@NgModule({
  declarations: [
    PhotosMainComponent,
    PhotoShareComponent,
    PhotoShareListeComponent
  ],
  imports: [
    CommonModule,
    PhotoShareRoutingModule
  ]
})
export class PhotoShareModule { }
