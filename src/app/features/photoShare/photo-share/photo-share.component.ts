import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../../../models/face-snap.model';
import { PhotosShareService } from '../../../shared/services/photos-share.service';

@Component({
  selector: 'app-photo-share',
  templateUrl: './photo-share.component.html',
  styleUrls: ['./photo-share.component.scss']
})
export class PhotoShareComponent implements OnInit {
  
  /**
   *
   */
  constructor(private photosShareService: PhotosShareService) { }

  @Input() faceSnap!: FaceSnap;

  // le '!' ou appelé 'Bang' permet de promettre une initialisation d'un attribut \\
  snapped!: boolean;
  txtBtnSnapped!: string;

  // Exécuté au lancement du composant \\
  ngOnInit() {
    
    // init buttonSnap
    this.txtBtnSnapped = 'Oh Snap!';
    this.snapped = false;
  }

  onSnap() {
    if (!this.snapped) {

      this.photosShareService.snapPhotoShareById(this.faceSnap.id, 'snap');
      this.txtBtnSnapped = 'Oops, un snap!';
      this.snapped = !this.snapped;
    }
    else {

      this.photosShareService.snapPhotoShareById(this.faceSnap.id, 'unsnap');
      this.txtBtnSnapped = 'Oh Snap!';
      this.snapped = !this.snapped;
    }
  }
}
