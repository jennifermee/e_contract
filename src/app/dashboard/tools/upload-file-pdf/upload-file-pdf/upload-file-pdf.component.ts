import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType, HttpResponse } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
@Component({
  selector: 'app-upload-file-pdf',
  templateUrl: './upload-file-pdf.component.html',
  styleUrls: ['./upload-file-pdf.component.scss']
})
export class UploadFilePdfComponent implements OnInit {
  @Output() selectFilePDF = new EventEmitter<any>();
  constructor(private http: HttpClient) { }
  uploadfile: any;
  ngOnInit(): void {
  }

  onFileSelected() {
    const $img: any = document.querySelector('#inputGroupFile02');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        console.log(e.target);
        // this.uploadfile = e.target.result;
        this.selectFilePDF.emit(e.target.result);
      };
      this.uploadfile = $img.files[0];
      reader.readAsArrayBuffer($img.files[0]);
    }
  }

  uploadPdfFileToNodeJs() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': '*',
      })
    };
    const url = environment.nodeEndPoint.url;
    const port = environment.nodeEndPoint.port;
    const formData = new FormData();
    formData.append('avatar', this.uploadfile);
    // formData.append('content', file);
    // console.log(this.uploadfile, formData);

    this.http.post<any>(url + ':' + port + '/profile', formData, {
      reportProgress: true,
    }).subscribe((response) => {
      if (response.type === HttpEventType.UploadProgress) {
        // This is an upload progress event. Compute and show the % done:
        const percentDone = Math.round(100 * response.loaded / response.total);
        console.log(`File is ${percentDone}% uploaded.`);
      } else if (response instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
      // this.selectFilePDF.emit(response.root + '\\' + response.file.path);
      // console.log(response);
    });
  }
}
