import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  validators: any = {
    type: '',
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  }
  disabledBtn: boolean = true;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initFormRegister();
    this.checkValidatiorsFormRegister();
  }

  checkValidatiorsFormRegister() {
    const _calss = {
      VALID: '',
      INVALID: 'invalid'
    }

    this.validators.type = _calss[this.formRegister.get('type').status];
    this.validators.name = _calss[this.formRegister.get('name').status];
    this.validators.email = _calss[this.formRegister.get('email').status];
    this.validators.password = _calss[this.formRegister.get('password').status];
    this.validators.confirmpassword = _calss[this.formRegister.get('confirmpassword').status];
    console.log(this.validators);
  }

  checkDisabledBtn() {
    const valid = {
      VALID: false,
      INVALID: true
    }
    this.disabledBtn = valid[this.formRegister.status];
  }

  initFormRegister() {
    this.formRegister = this.fb.group({
      type: [null, Validators.required],
      name: [null, [Validators.required, Validators.pattern(/\w{3,20}/)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(/\w{8,20}/)]],
      confirmpassword: [null, [Validators.required, Validators.pattern(/\w{8,20}/)]],
    });
    this.formRegister.get('type').valueChanges.subscribe(selectValue => {
      console.log(this.formRegister.get('type'), this.formRegister.get('type').status);
    });
    this.formRegister.get('name').valueChanges.subscribe(selectValue => {
      console.log(this.formRegister.get('name'), this.formRegister.get('name').status);
    });
    this.formRegister.get('email').valueChanges.subscribe(selectValue => {
      console.log(this.formRegister.get('email'), this.formRegister.get('email').status);
    });
    this.formRegister.get('password').valueChanges.subscribe(selectValue => {
      console.log(this.formRegister.get('password'), this.formRegister.get('password').status);
    });
    this.formRegister.get('confirmpassword').valueChanges.subscribe(selectValue => {
      console.log(this.formRegister.get('confirmpassword'), this.formRegister.get('confirmpassword').status);
    });
    this.formRegister.valueChanges.subscribe(value => {
      this.checkValidatiorsFormRegister();
      this.checkDisabledBtn();
    });
  }

  clickFuction() {
    this.router.navigate(['/verification-register']);
  }
}
