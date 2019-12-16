import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'todo-list', pathMatch: 'full' },
  { path: 'todo-list', loadChildren: () => import('./pages/todo-list/todo-list.module').then( m => m.TodoListPageModule)},
  // {
  //   path: 'todo-list',
  //   loadChildren: () => import('./pages/todo-list/todo-list.module').then( m => m.TodoListPageModule)
  // },
  {
    path: 'todo-add',
    loadChildren: () => import('./pages/todo-add/todo-add.module').then( m => m.TodoAddPageModule)
  },
  {
    path: 'todo-detail',
    loadChildren: () => import('./pages/todo-detail/todo-detail.module').then( m => m.TodoDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
