import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AlertSaveNameTemplateService } from './alert-save-name-template.service';


@Component({
  selector: 'app-alert-save-name-template',
  templateUrl: './alert-save-name-template.component.html',
  styleUrls: ['./alert-save-name-template.component.scss']
})
export class AlertSaveNameTemplateComponent implements OnInit {
  show: boolean;
  htmlBody: string;
  state: string;
  formNameTemplate: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertSaveNameTemplateService: AlertSaveNameTemplateService
    ) {

  }

  ngOnInit(): void {
    this.initFormLogin();
  }

  initFormLogin() {
    this.formNameTemplate = this.fb.group({
      nameTemplate: [''],
    });

    this.formNameTemplate.get('nameTemplate').valueChanges.subscribe(selectValue => {
      this.alertSaveNameTemplateService.setNameTemplate(selectValue);
    });
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

    if (this.alertSaveNameTemplateService.change.show) {
      this.show = this.alertSaveNameTemplateService.show;
      this.alertSaveNameTemplateService.setChange('show', false);
    }
    if (this.alertSaveNameTemplateService.change.html) {
      this.htmlBody = this.alertSaveNameTemplateService.htmlBody;
      this.alertSaveNameTemplateService.setChange('html', false);
    }
    if (this.alertSaveNameTemplateService.change.state) {
      this.state = this.alertSaveNameTemplateService.getState();
      this.alertSaveNameTemplateService.setChange('state', false);
    }
  }

  closeModal() {
    this.alertSaveNameTemplateService.close();
  }

  exportDataTable() {
    this.alertSaveNameTemplateService.close();
  }

  onClickBtn(btn: any) {
    this.alertSaveNameTemplateService[btn].func();
  }
}
