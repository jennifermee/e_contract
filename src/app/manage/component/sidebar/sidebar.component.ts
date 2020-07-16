import { Component, OnInit, Input } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons/faFolderOpen';
import { faCopy } from '@fortawesome/free-regular-svg-icons/faCopy';
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar-damo',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() action: any;
  menu_action: any;
  manu: any;
  faHome = faHome;
  faFolderOpen = faFolderOpen;
  faCopy = faCopy;
  faCog = faCog;
  faChevronRight = faChevronRight;

  constructor(
    private sidebarService: SidebarService,
  ) { }

  ngOnInit(): void {
    this.menu_action = this.action;
    this.manu = {
      create_an_electronic: { c: ' active', b: true },
      home: { c: '', b: false },
      template_management: { c: '', b: false },
      contract_management: { c: '', b: false },
      set: { c: '', b: false },
      contract_information: { c: '', b: false },
      document_upload: { c: '', b: false },
      editor: { c: '', b: false },
    };
  }

  ngDoCheck(): void {
    if(this.sidebarService.getState()){
      this.menu_action = this.sidebarService.getManuActive();
      this.setActionMenu();
      this.sidebarService.setState(false);
    }
  }

  setActionMenu() {
    const key = Object.keys(this.manu);
    for (let i = 0; i < key.length; i++) {
      if (key[i] === this.menu_action) {
        this.manu[key[i]].b = true;
        this.manu[key[i]].c = ' active';
      } else {
        this.manu[key[i]].b = false;
        this.manu[key[i]].c = '';
      }
    }
  }
}
