import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  formForgotPassword: FormGroup;
  validators: any = {
    email: '',
  }
  disabledBtn: boolean = true;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initFormForgotPassword();
    this.checkValidatiorsFormForgotPassword();
  }

  checkValidatiorsFormForgotPassword() {
    const _calss = {
      VALID: '',
      INVALID: 'invalid'
    }
    this.validators.email = _calss[this.formForgotPassword.get('email').status];
  }

  initFormForgotPassword() {
    this.formForgotPassword = this.fb.group({
      email: [null, [Validators.required, Validators.email]]
    });
    this.formForgotPassword.get('email').valueChanges.subscribe(selectValue => {
      console.log(this.formForgotPassword.get('email'), this.formForgotPassword.get('email').status);
    });
    this.formForgotPassword.valueChanges.subscribe(value => {
      console.log(value);
      this.checkValidatiorsFormForgotPassword();
      this.checkDisabledBtn();
    });
  }

  checkDisabledBtn() {
    const valid = {
      VALID: false,
      INVALID: true
    }
    this.disabledBtn = valid[this.formForgotPassword.status];
  }

}
