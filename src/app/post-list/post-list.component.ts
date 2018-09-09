import { Component, OnInit, Pipe } from '@angular/core';
import { Post, PostService } from '.././services/post.service';
import { TextFilterPipe }  from '.././pipes/text-filter.pipe';
import { DynamicSortPipe }  from '.././pipes/dynamic-sort.pipe';


/* 
  PostListComponent display all the posts 
  recovered by the remote server. 
  It provides the tools for search a post 
  by a search term and for ordering 
  alphabetically the posts.
*/
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  allPosts: Post[];
  filteredPost: Post[];
  filterText: string;
  alphabeticFilter: string;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.allPosts = this.postService.getAllPost();
    this.filterText = undefined;
    this.alphabeticFilter = undefined;
    this.filteredPost = JSON.parse(JSON.stringify(this.allPosts));
  }

  alphabeticOrder(order) {
    this.alphabeticFilter = order;
    this.filteredPost = new DynamicSortPipe().transform(this.filteredPost,'title',this.alphabeticFilter);
  }

  filterByText() {
    this.filteredPost = new TextFilterPipe().transform(this.allPosts, this.filterText);
    if(this.alphabeticFilter) {
      this.filteredPost = new DynamicSortPipe().transform(this.filteredPost,'title',this.alphabeticFilter);
    }
  }

  originalOrder() {    
    this.alphabeticFilter = undefined;
    this.filterByText();
  } 

}