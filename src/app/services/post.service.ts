import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

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
