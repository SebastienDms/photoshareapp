import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/component/not-found/not-found.component';
import { WelcomeComponent } from '../shared/component/welcome/welcome.component';
import { PhotosMainComponent } from '../features/photoShare/photos-main/photos-main.component';

const routes: Routes = [
  {
    path: '', component: WelcomeComponent /*, pathMatch:'full', redirectTo: '/'*/
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
