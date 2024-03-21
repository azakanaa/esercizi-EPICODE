import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent {
  posts: Post[] = [];


  constructor(){
    this.getInactivePosts().then((data) => {
      this.posts = data;
  });
  }

  async getInactivePosts() {
    const response = await fetch('../../assets/db.json');
    const data = (await response.json() as Array<Post>)
    return data.filter((post) => !post.active);
  }
}
