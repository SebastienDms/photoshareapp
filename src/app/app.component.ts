import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  // mySnap1!: FaceSnap;
  // mySnap2!: FaceSnap;

  ngOnInit(): void {

    // init snap
    this.faceSnaps = [
      {
        title: 'Sébastien',
        description: 'Développeur Angular',
        created: new Date(),
        snapNumber: 1,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        location: 'Hannut'
      },
      {
        title: 'Quentin',
        description: 'Développeur C#',
        created: new Date(),
        snapNumber: 10,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
      },
      {
        title: 'Marcel',
        description: 'Gestionnaire DB',
        created: new Date(),
        snapNumber: 15,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
      }
    ];
  }
}
