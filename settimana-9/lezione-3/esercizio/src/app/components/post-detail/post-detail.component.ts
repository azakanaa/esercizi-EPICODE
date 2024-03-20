import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
  posts: Post[] = [];
  related: Post[] = [];
  included: number[] = [];

  constructor() {
    this.readPosts();
  }

  async readPosts() {
    const response = await fetch('../../assets/db.json');
    const data = await response.json();
    this.posts = data;
    if (data) {
      this.relatedPosts();
    }
  }

  relatedPosts() {
    for (let i = 0; i < 2; i++) {
      let index = Math.floor(Math.random() * this.posts.length);
      if (this.included.includes(index)) {
        index = Math.floor(Math.random() * this.posts.length);
      }
      this.included.push(index);
    }
    for (let i = 0; i < this.included.length; i++) {
      let postIndex = this.included[i] - 1;
      this.related.push(this.posts[postIndex]);
    }
  }
}
