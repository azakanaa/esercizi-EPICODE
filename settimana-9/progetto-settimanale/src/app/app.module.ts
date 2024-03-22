import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AudiComponent } from './components/audi/audi.component';
import { FerrariComponent } from './components/ferrari/ferrari.component';
import { FordComponent } from './components/ford/ford.component';
import { FiatComponent } from './components/fiat/fiat.component';
import { EvidenceComponent } from './components/evidence/evidence.component';

const routes: Route[] = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'ferrari',
    component: FerrariComponent
  },
  {
    path: 'ford',
    component: FordComponent
  },
  {
    path: 'audi',
    component: AudiComponent
  },
  {
    path: 'fiat',
    component: FiatComponent
  },
  {
    path: '**',
    redirectTo: '',
},
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    AudiComponent,
    FerrariComponent,
    FordComponent,
    FiatComponent,
    EvidenceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
