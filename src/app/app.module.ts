import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatCardModule, MatDividerModule, MatListModule, MatButtonModule, MatInputModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppComponent } from './app.component';

import { HttpService } from './services/http.service';
import { PostService } from './services/post.service';
import { TextFilterPipe } from './pipes/text-filter.pipe';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { DynamicSortPipe } from './pipes/dynamic-sort.pipe';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TextFilterPipe,
    PostListComponent,
    PostDetailComponent,
    DynamicSortPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatButtonToggleModule,
    AppRoutingModule
  ],
  providers: [
    HttpService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
