import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UserAccount} from '../models/userAccount';
import {UserAccountService} from '../services/userAccount.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  constructor(private userAccountService: UserAccountService, private router: Router) {
  }

  SigninForm: FormGroup;
  RegisterForm: FormGroup;

  onSubmit() {
    const user = new UserAccount(this.SigninForm.value.email, this.SigninForm.value.password);
    this.userAccountService.signIn(user)
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.userId);
          this.router.navigateByUrl('/');
        },
        error => console.error(error)
      );
    this.SigninForm.reset();
  }

  onRegister() {
    const user: UserAccount = new UserAccount(
      this.RegisterForm.value.emailRegister,
      this.RegisterForm.value.passwordRegister,
      this.RegisterForm.value.firstName,
      this.RegisterForm.value.lastName
    );
    this.userAccountService.signUp(user).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.RegisterForm.reset();
  }

  ngOnInit() {
    this.SigninForm = new FormGroup({
      password: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')
      ]),
    });

    this.RegisterForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[A-Za-z][A-Za-z0-9]*$')
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[A-Za-z][A-Za-z0-9]*$')
      ]),
      emailRegister: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')
      ]),
      passwordRegister: new FormControl(null, Validators.required)
    });
  }
}
