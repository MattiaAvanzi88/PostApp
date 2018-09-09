import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

/* 
  Post service is the main service of the application.
  - it defines the new class type Post
  - it defines,using Http Service, the procedure 
    to download the posts
  - it can store and provide the posts data
    for all components of the application
*/
export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  allPost: Post[];

  constructor(private httpService: HttpService) { }

  downloadAllPost(): Promise<any> {
    return this.httpService.getRequest('http://jsonplaceholder.typicode.com/posts');
  }

  getPostById(id: number): Post {
    return this.allPost.find(post => post.id === id); 
  }

  getAllPost(): Post[] {
    return this.allPost;
  }

  setAllPost(posts: Post[]): void {
    this.allPost = posts;
  } 
}
