import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class StorageServiceService {
    storageData: any = [];
    newData: any = [];
    constructor(
                private storage: Storage,
    ) { }

    async saveData() {
        this.newData = '';
        await this.getData();
        this.newData.push(this.storageData);
        console.log(this.newData);
        await this.storage.set('todo', this.newData);
    }

    async getData() {
        await this.storage.get('todo').then((val) =>{
            console.log(val);
            this.newData = val;
        }, err =>{
            console.log(err);
        })
    }
}
