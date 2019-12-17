import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from '../../services/storage-service.service';
import { Router } from '@angular/router'; 

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.page.html',
    styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {
    todoItem: any = [];
    constructor(
                public storageService: StorageServiceService,
                public router: Router
    ) {
        this.storageService.getData();
        // this.todoItem = storageService.newData

    }
    getItem(item, i) {
        console.log(item, i);
        this.router.navigate(['todo-detail']);
    }

    ngOnInit() {
    }

}
