import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class StorageServiceService {
    storageData: any = [];
    constructor(
                private storage: Storage,
    ) { }

    saveData(data) {

        this.getData();
        this.storage.set('todo', this.storageData);
    }

    getData() {
        this.storage.get('todo').then((val) =>{
            console.log(val);
            this.storageData = val;
            console.log(this.storageData);
        }, err =>{
            console.log(err);
        })
    }
}
