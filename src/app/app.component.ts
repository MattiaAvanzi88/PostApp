import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

/* 
  The App main component shows a waiting screen as long as
  the post data has not been downloaded. 
  Once the Posts have been downloaded, they are saved
  in the PostService so as to make they available to 
  the others components.
  In case of error, a message is shown.
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  onLoading: boolean;
  backendErrorFlag: boolean;

  constructor(private postService: PostService) {
    this.onLoading = true;
    this.backendErrorFlag = false;
  }

  ngOnInit() { 
    const that = this;
    this.postService.downloadAllPost().then( postData => {
      that.postService.setAllPost(postData);
      that.onLoading = false;
    }, error => {
      this.backendError();
    });
  }

  backendError() {
    this.backendErrorFlag = true;
    this.onLoading = false;
  }

}
