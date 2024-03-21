import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EvidencePostsComponent } from './components/evidence-posts/evidence-posts.component';
import { RelatedPostsComponent } from './components/related-posts/related-posts.component';
import { AdvisedPostsComponent } from './components/advised-posts/advised-posts.component';

const routes: Route[] = [
  {
    path: 'active-posts',
    component: ActivePostsComponent
  },
  {
    path: 'inactive-posts',
    component: InactivePostsComponent
  },
  {
    path: 'post:id',
    component: PostDetailComponent
  },
  {
    path: '',
    component: HomeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    PostDetailComponent,
    NavbarComponent,
    HomeComponent,
    EvidencePostsComponent,
    RelatedPostsComponent,
    AdvisedPostsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
