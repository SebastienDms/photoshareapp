import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class PhotosShareService {
    // init snap
    faceSnaps: FaceSnap[] = [
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
            snapNumber: 100,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
        },
        {
            title: 'Marcel',
            description: 'Gestionnaire DB',
            created: new Date(),
            snapNumber: 200,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
        }
    ];
}