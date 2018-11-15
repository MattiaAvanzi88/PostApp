import { Component, OnInit, Pipe } from '@angular/core';
import { Post, PostService } from '.././services/post.service';
import { TextFilterPipe } from '.././pipes/text-filter.pipe';
import { DynamicSortPipe } from '.././pipes/dynamic-sort.pipe';


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
  dinamicSortPipe: DynamicSortPipe;
  textFilterPipe: TextFilterPipe;

  constructor(private postService: PostService) {
    this.dinamicSortPipe = new DynamicSortPipe();
    this.textFilterPipe = new TextFilterPipe();
  }

  ngOnInit() {
    this.allPosts = this.postService.getAllPost();
    this.filterText = undefined;
    this.alphabeticFilter = undefined;
    this.filteredPost = JSON.parse(JSON.stringify(this.allPosts));
  }

  alphabeticOrder(order) {
    this.alphabeticFilter = order;
    this.filteredPost = this.dinamicSortPipe.transform(this.filteredPost, 'title', this.alphabeticFilter);
  }

  filterByText() {
    this.filteredPost = this.textFilterPipe.transform(this.allPosts, this.filterText);
    if (this.alphabeticFilter) {
      this.filteredPost = this.dinamicSortPipe.transform(this.filteredPost, 'title', this.alphabeticFilter);
    }
  }

  originalOrder() {
    this.alphabeticFilter = undefined;
    this.filterByText();
  }

}
