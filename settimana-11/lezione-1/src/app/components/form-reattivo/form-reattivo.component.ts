import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  AbstractControl,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-form-reattivo',
  templateUrl: './form-reattivo.component.html',
  styleUrls: ['./form-reattivo.component.scss']
})

export class FormReattivoComponent {
  name = new FormControl("")
  surname = new FormControl("")
  password = new FormControl("")
  password2 = new FormControl("")
  gender = new FormControl("")
  profileImg = new FormControl("")
  bio = new FormControl("")
  username = new FormControl("")
}
