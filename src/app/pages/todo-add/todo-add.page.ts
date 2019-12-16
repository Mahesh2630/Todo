import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { StorageServiceService } from '../../services/storage-service.service';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-todo-add',
    templateUrl: './todo-add.page.html',
    styleUrls: ['./todo-add.page.scss'],
})
export class TodoAddPage implements OnInit {
    private todo : FormGroup;
    constructor(
                private formBuilder: FormBuilder,
                private storageService: StorageServiceService,
                public storage: Storage
    ) { 
        this.todo = this.formBuilder.group({
            title: ['', Validators.required],
            description: [''],
          });

          this.storage.get('todo').then((val) =>{
            console.log(val);
        })
    }

    logForm() {
        console.log(this.todo.value);
        this.storageService.saveData(this.todo.value)
    }

    ngOnInit() {
    }

}
