import {Component, OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms";
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  SigninForm: FormGroup
  RegisterForm: FormGroup
  onSubmit() {
    this.SigninForm.reset();
    this.RegisterForm.reset();
  }

  ngOnInit() {
    this.SigninForm = new FormGroup({
      password: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
    });

    this.RegisterForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[A-Za-z][A-Za-z0-9]*$")
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[A-Za-z][A-Za-z0-9]*$")
      ]),
      emailRegister: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      passwordRegister: new FormControl(null, Validators.required)
    });
  }
}
