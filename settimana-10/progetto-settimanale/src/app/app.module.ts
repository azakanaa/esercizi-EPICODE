import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UncompletedComponent } from './components/uncompleted/uncompleted.component';
import { CompletedComponent } from './components/completed/completed.component';
import { UsersComponent } from './components/users/users.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';

const routes: Route[] = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'completed',
    component: CompletedComponent
  },
  {
    path: 'uncompleted',
    component: UncompletedComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'all',
    component: AllTasksComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UncompletedComponent,
    CompletedComponent,
    UsersComponent,
    AllTasksComponent
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
