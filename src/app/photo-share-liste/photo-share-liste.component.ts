import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { PhotosShareService } from '../services/photos-share.service';

@Component({
  selector: 'app-photo-share-liste',
  templateUrl: './photo-share-liste.component.html',
  styleUrls: ['./photo-share-liste.component.scss']
})
export class PhotoShareListeComponent implements OnInit {

  constructor(private photosShareService:PhotosShareService) { }

  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = this.photosShareService.getAllPhotosShare();
  }

}
