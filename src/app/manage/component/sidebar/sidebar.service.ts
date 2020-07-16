import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  manuActive: any;
  subManuActive: any;
  state: boolean;
  constructor() { }

  setManuActive(
    manuActive?: 'create_an_electronic' |
      'home' |
      'template_management' |
      'contract_management' |
      'set' |
      'contract_information' |
      'document_upload' |
      'editor'
  ) {
    this.manuActive = manuActive;
    this.setState(true);
  }

  getManuActive(): void {
    return this.manuActive;
  }

  setSubManuActive(subManuActive?: ''){
    this.subManuActive = subManuActive;
  }

  getSubManuActive(): void {
    return this.subManuActive;
  }

  setState(state?: true | false){ 
    this.state = state;
  }

  getState(){
    return this.state;
  }
}