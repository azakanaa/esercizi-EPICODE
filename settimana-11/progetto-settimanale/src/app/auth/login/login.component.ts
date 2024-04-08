import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authSrv: AuthService) {}

  login(form: NgForm) {
    try {
      this.authSrv.login(form.value).subscribe();
    } catch (error) {
      console.error(error);
    }
  }
}
