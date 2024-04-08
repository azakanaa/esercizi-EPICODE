import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from 'src/app/models/register.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  userReg!: Register;
  
  constructor(private authSrv: AuthService) {}

  onSubmit(form: NgForm) {
    try {
      this.authSrv.signup(form.value).subscribe();
    } catch (error) {
      console.error(error);
    }
  }
}
