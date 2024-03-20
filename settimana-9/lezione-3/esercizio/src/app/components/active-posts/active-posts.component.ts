import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})

export class ActivePostsComponent {
  post!: Post;
  posts!: Post[];

  constructor() {
    this.evidencePost();
  }

  async evidencePost() {
    const response = await fetch('../../assets/db.json');
    const data = await response.json();
    this.posts = data;
    let index = Math.floor(Math.random() * this.posts.length);
    this.post = this.posts[index];
  }
}
