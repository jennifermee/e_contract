import { Injectable } from '@angular/core';
import { API_URL } from '../api.constant';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  pathGetTemplateAll: string = API_URL.getTemplateAll;
  pathDeleteTemplateByid: string = API_URL.deleteTemplate;
  pathEditTempYn: string = API_URL.editTempYn;
  pathFildMark: string = API_URL.getFildMark;
  pathCreateTemplate: string = API_URL.createTemplate;

  constructor(
    private http: HttpClient
  ) { }

  public setFormData(data: { [x: string]: string | Blob; }) {
    var formData = new FormData();
    let key = Object.keys(data);
    for (let index = 0; index < key.length; index++) {
      formData.append(key[index], data[key[index]]);
    }
    return formData;
  }

  public getTemplateAll() {
    return this.http.get(this.pathGetTemplateAll);
  }

  public deleteTemplate(templId) {
    return this.http.delete(this.pathDeleteTemplateByid + '/' + templId)
  }

  public getFildMark(templId) {
    return this.http.get(this.pathFildMark + '/' + templId)
  }

  public openPdfFile(nameFile: String) {
    return API_URL.openPdfdil + nameFile;
  }

  public editTempYn(data) {
    // let formData = this.setFormData(data);
    return this.http.post(this.pathEditTempYn, data);
  }

  public createTemplate(formData: FormData) {
    return this.http.post(this.pathCreateTemplate,formData);
  }
}
