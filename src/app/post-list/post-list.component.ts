import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '.././services/post.service';
import { TextFilterPipe }  from '.././pipes/text-filter.pipe';
import { DynamicSortPipe }  from '.././pipes/dynamic-sort.pipe';

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
