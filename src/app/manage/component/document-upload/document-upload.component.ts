import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TemplateService } from '../../service/template/template.service'
import { Router } from '@angular/router';
import { EditorPdfService } from "../editor-pdf/editor-pdf.service";

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss']
})
export class DocumentUploadComponent implements OnInit {
  faSearch = faSearch;
  sidebar: any = 'document_upload';
  uploadForm: FormGroup;
  uploadfile: any;
  constructor(
    private formBuilder: FormBuilder,
    private templateService: TemplateService,
    private router: Router,
    private editorPdfService: EditorPdfService,
    ) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  onFileSelected() {
    const $img: any = document.querySelector('#files');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        console.log(e.target);
        // this.uploadfile = e.target.result;
        // this.selectFilePDF.emit(e.target.result);
      };
      this.uploadfile = $img.files[0];
      // this.uploadForm.get('profile').setValue($img.files[0]);
      reader.readAsArrayBuffer($img.files[0]);
      this.createTemplate();
    }
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
    this.createTemplate();
  }

  createTemplate(){
    const formData = new FormData();
    formData.append('files', this.uploadfile);
    this.templateService.createTemplate(formData).subscribe((rs: any) => {
      console.log(rs);
      this.editorPdfService.setTemplateId(rs.templId);
      this.router.navigate(['create-template-contract']);
    });
  }

}
