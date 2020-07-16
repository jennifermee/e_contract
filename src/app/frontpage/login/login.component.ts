import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthLoginService } from '../../manage/service/authLogin/auth-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-front',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  validators: any = {
    // email: '',
    password: '',
    username: '',
  }
  disabledBtn: boolean = true;
  constructor(
    private fb: FormBuilder,
    private authLoginService: AuthLoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initFormLogin();
    this.checkValidatiorsFormLogin();
  }

  checkValidatiorsFormLogin() {
    const _calss = {
      VALID: '',
      INVALID: 'invalid'
    }
    // this.validators.email = _calss[this.formLogin.get('email').status];
    this.validators.password = _calss[this.formLogin.get('password').status];
    this.validators.username = _calss[this.formLogin.get('username').status];
  }

  initFormLogin() {
    this.formLogin = this.fb.group({
      //email: [null, [Validators.required, Validators.email]],
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.pattern(/\w{8,20}/)]],
    });
    // this.formLogin.get('email').valueChanges.subscribe(selectValue => {
    //   console.log(this.formLogin.get('email'), this.formLogin.get('email').status);
    // });
    this.formLogin.get('password').valueChanges.subscribe(selectValue => {
      console.log(this.formLogin.get('password'), this.formLogin.get('password').status);
    });
    this.formLogin.get('username').valueChanges.subscribe(selectValue => {
      console.log(this.formLogin.get('username'), this.formLogin.get('username').status);
    });
    this.formLogin.valueChanges.subscribe(value => {
      console.log(value);
      this.checkValidatiorsFormLogin();
      this.checkDisabledBtn();
    });
  }

  onLogin() {
    this.authLoginService.authLogin(this.formLogin.get('username').value, this.formLogin.get('password').value).then(result => {
      this.router.navigate(['main']);
    }, error => {
      console.log(error)
    });
  }

  checkDisabledBtn() {
    const valid = {
      VALID: false,
      INVALID: true
    }
    this.disabledBtn = valid[this.formLogin.status];
  }

}
