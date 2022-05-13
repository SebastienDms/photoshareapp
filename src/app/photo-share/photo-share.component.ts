import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-photo-share',
  templateUrl: './photo-share.component.html',
  styleUrls: ['./photo-share.component.scss']
})
export class PhotoShareComponent implements OnInit {
  
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

      this.faceSnap.snapNumber++;
      this.txtBtnSnapped = 'Oops, un snap!';
      this.snapped = !this.snapped;
    }
    else {

      this.faceSnap.snapNumber--;
      this.txtBtnSnapped = 'Oh Snap!';
      this.snapped = !this.snapped;
    }
  }
}
