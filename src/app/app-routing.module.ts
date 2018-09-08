import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/postList', pathMatch: 'full' },
  { path: 'postList', component: PostListComponent },
  { path: 'detail/:id', component: PostDetailComponent }
];


@NgModule({
  imports: [ 
    RouterModule.forRoot(routes) 
  ],
  exports: [ 
    RouterModule 
  ]
})
export class AppRoutingModule { }