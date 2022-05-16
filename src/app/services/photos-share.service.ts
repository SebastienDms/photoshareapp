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
            id: 1,
            title: 'Sébastien',
            description: 'Développeur Angular',
            created: new Date(),
            snapNumber: 1,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            location: 'Hannut'
        },
        {
            id: 2,
            title: 'Quentin',
            description: 'Développeur C#',
            created: new Date(),
            snapNumber: 100,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
        },
        {
            id: 3,
            title: 'Marcel',
            description: 'Gestionnaire DB',
            created: new Date(),
            snapNumber: 200,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
        }
    ];

    public getAllPhotosShare(): FaceSnap[]{
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {

        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);

        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }

    public snapPhotoShareById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        
        const faceSnap = this.getFaceSnapById(faceSnapId);

        snapType === 'snap' ? faceSnap.snapNumber++ : faceSnap.snapNumber--;
    }
}