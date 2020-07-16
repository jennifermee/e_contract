import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EditorPdfService {

  templ_id: string;

  constructor() { }

  setTemplateId(templ_id: string) {
    this.templ_id = templ_id;
  }

  getTemplateAID() {
    return this.templ_id;
  }

}
