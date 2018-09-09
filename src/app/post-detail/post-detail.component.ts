import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; 
import { Post, PostService } from '.././services/post.service';


/* 
  PostDetailComponent recover and display
  datas of the post with id reported in 
  the URL string
*/
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
