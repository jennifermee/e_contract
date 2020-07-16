import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertConfirmService } from '../modal/alert-confirm/alert-confirm.service';
import { SendLinkService } from '../modal/send-link/send-link.service';
import { SidebarService } from '../sidebar/sidebar.service';
import { TemplateService } from '../../service/template/template.service';
import { LoadingService } from "../../shared/loading/loading.service";
import { EditorPdfService } from "../editor-pdf/editor-pdf.service";

import { faSearch, faTimes, faShare, faPencilAlt, faLink, faDownload, faReply, faBriefcase } from '@fortawesome/free-solid-svg-icons';
// import { faSearch, faTimes, faShare, faPencilAlt, faLink, faDownload, faReply, faBriefcase, faS } from '@fortawesome/free-regular-svg-icons';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-management',
  templateUrl: './template-management.component.html',
  styleUrls: ['./template-management.component.scss']
})
export class TemplateManagementComponent implements OnInit {
  sidebar: any;
  faSearch = faSearch;
  faTimes = faTimes;
  faShare = faShare;
  faPencilAlt = faPencilAlt;
  faLink = faLink;
  faDownload = faDownload;
  faBriefcase = faBriefcase;
  formSearch: FormGroup;
  formCheckBox: FormGroup;
  tp: any;
  faReply = faReply;
  tList: any[] = [];

  constructor(
    private fb: FormBuilder,
    private alertConfirmService: AlertConfirmService,
    private sendLinkService: SendLinkService,
    private sidebarService: SidebarService,
    private TemplateService: TemplateService,
    private LoadingService: LoadingService,
    private router: Router,
    private editorPdfService: EditorPdfService
  ) {
    this.sidebar = 'template_management';
    this.sidebarService.setManuActive(this.sidebar);
  }

  ngOnInit(): void {
    this.initFormSearch();
    // this.tp = this.inData();
    this.getTemplateAll();
  }

  getTemplateAll() {
    this.LoadingService.openLoading();
    this.TemplateService.getTemplateAll().subscribe((rs: any) => {
      this.tp = rs
      this.LoadingService.closeLoading();
    });
  }

  deleteTemplate(templId: any) {
    this.TemplateService.deleteTemplate(templId).subscribe((rs: any) => {
      if (rs === 'Data deleted successfully') {
        this.deleteAllSelect();
        this.getTemplateAll();
      }
    });
  }

  editTempYn(data: any) {
    this.TemplateService.editTempYn(data).subscribe((rs: any) => {
      if (rs === 'Data Update successfully') {
      }
    });
  }

  ngAfterViewInit(): void {
    this.sidebar = 'template_management';
    this.sidebarService.setManuActive(this.sidebar);
  }

  inData() {
    return [{
      id: 1,
      use: "Y",
      state: "완료",
      name: "표준근로계약서 2020",
      constructor: "김용선",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    },
    {
      id: 2,
      use: "N",
      state: "진행중",
      name: "아르바이트 근로계약서",
      constructor: "진혜연",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    },
    {
      id: 3,
      use: "Y",
      state: "완료",
      name: "표준근로계약서 2020",
      constructor: "김용선",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    },
    {
      id: 4,
      use: "N",
      state: "진행중",
      name: "아르바이트 근로계약서",
      constructor: "진혜연",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    },
    {
      id: 5,
      use: "Y",
      state: "완료",
      name: "표준근로계약서 2020",
      constructor: "김용선",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    },
    {
      id: 6,
      use: "N",
      state: "진행중",
      name: "아르바이트 근로계약서",
      constructor: "진혜연",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    },
    {
      id: 7,
      use: "Y",
      state: "완료",
      name: "표준근로계약서 2020",
      constructor: "김용선",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    }]
  }

  initFormSearch() {
    this.formSearch = this.fb.group({
      searchText: ['']
    });
    this.formSearch.get('searchText').valueChanges.subscribe(selectValue => {
      if (selectValue !== '') {
      } else {
      }
    });
  }

  checkBoxSelect(number: number) {
    let arr = this.tList;

    let index = arr.findIndex(res => res.templId === number);

    if (index > -1) {
      arr.splice(index, 1);
    } else {
      arr.push({ templId: number });
    }
    this.tList = arr;
  }

  showEditor(templ_id: string) {
    this.editorPdfService.setTemplateId(templ_id);
    this.router.navigate(['create-template-contract']);
  }

  deleteAllSelect() {
    if (this.tList.length > 0) {
      let data = this.tp;
      this.tList.forEach(list => {
        let index = data.findIndex(res => res.templId === list.templId);
        data.splice(index, 1);
        this.tList = [];
        this.deleteTemplate(list.templId);
        return true;
      });
      this.tp = data;
    }
  }

  availableAllSelect() {
    if (this.tList.length > 0) {
      let data = this.tp;
      this.tList.forEach(list => {
        let index = data.findIndex(res => res.templId === list.templId);
        data[index].templYn = "Y";
        this.editTempYn(data[index]);
      });
      this.tp = data
    }
  }

  notAvailableAllSelect() {
    if (this.tList.length > 0) {
      let data = this.tp;
      this.tList.forEach(list => {
        let index = data.findIndex(res => res.templId === list.templId);
        data[index].templYn = "N";
        this.editTempYn(data[index]);
      });
      this.tp = data;
    }
  }

  onClickReply() {
    this.alertConfirmService.open(
      "대량 발송을 원하시는 경우<br>다음 단계에서 엑셀 양식을 사용해주세요",
      '',
      {
        func: () => {
          this.alertConfirmService.close();
        }
      },
      {
        func: () => {
          this.alertConfirmService.close();
        }
      }
    );
  }

  onClickSendLink() {
    this.sendLinkService.open(
      {
        func: () => {
          this.sendLinkService.close();
        }
      },
      {
        func: () => {
          this.sendLinkService.close();
        }
      }
    );
  }
}
