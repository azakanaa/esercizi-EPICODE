import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormReattivoComponent } from './components/form-reattivo/form-reattivo.component';
import { FormDrivenFormComponent } from './components/form-driven-form/form-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormReattivoComponent,
    FormDrivenFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
