import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; 
import { Post, PostService } from '.././services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post;
 
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) {}
 
  ngOnInit(): void {
    this.getPost();
  }
 
  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.post = this.postService.getPostById(Number(id));
  }
 
  goBack(): void {
    this.location.back();
  }

}
