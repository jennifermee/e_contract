import { Component, OnInit } from '@angular/core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalTeamMemberService } from '../modal/modal-team-member/modal-team-member.service';

@Component({
  selector: 'app-team-member-management',
  templateUrl: './team-member-management.component.html',
  styleUrls: ['./team-member-management.component.scss']
})
export class TeamMemberManagementComponent implements OnInit {
  faSearch = faSearch;
  formSearch: FormGroup;
  empDataList: any;
  objTable: any;

  constructor(
    private fb: FormBuilder,
    private modalteammemberservice: ModalTeamMemberService) {}

  ngOnInit(): void {
    this.initFormLogin();
    this.initDataEmp();
  }

  initDataEmp() {
    this.objTable = [];
    this.empDataList = {
      department: [
        {
          d_id: 1,
          d_name: 'Sales'
        }, {
          d_id: 2,
          d_name: 'Manufacturing'
        }, {
          d_id: 3,
          d_name: 'Production Control'
        }, {
          d_id: 4,
          d_name: 'Quality Control'
        }, {
          d_id: 5,
          d_name: 'Technical'
        }, {
          d_id: 6,
          d_name: 'Credit and Legal'
        }, {
          d_id: 7,
          d_name: 'Design'
        }
      ],
      tames: [
        {
          t_id: 1,
          t_name: 'Sales Tames 1',
          d_id: 1
        }, {
          t_id: 2,
          t_name: 'Manufacturing Tames 1',
          d_id: 2
        }, {
          t_id: 3,
          t_name: 'Production Control Tames 1',
          d_id: 3
        }, {
          t_id: 4,
          t_name: 'Quality Control Tames 1',
          d_id: 4
        }, {
          t_id: 5,
          t_name: 'Technical Tames 1',
          d_id: 5
        }, {
          t_id: 6,
          t_name: 'Credit and Legal Tames 1',
          d_id: 6
        }
      ],
      emp: [
        {
          e_id: 1,
          e_name: 'Armando',
          e_tel: '081-987-4568',
          e_mail: 'Armando@gmail.com',
          t_id: 1
        }, {
          e_id: 2,
          e_name: 'Tongdee',
          e_tel: '081-987-4568',
          e_mail: 'Tongdee@gmail.com',
          t_id: 1
        }, {
          e_id: 3,
          e_name: 'Fee 1',
          e_tel: '081-987-4568',
          e_mail: 'Fee_1@gmail.com',
          t_id: 2
        }, {
          e_id: 4,
          e_name: 'tae 1',
          e_tel: '081-987-4568',
          e_mail: 'tae_1@gmail.com',
          t_id: 3
        }, {
          e_id: 5,
          e_name: 'tae 2',
          e_tel: '081-987-4568',
          e_mail: 'tae_2@gmail.com',
          t_id: 3
        }, {
          e_id: 6,
          e_name: 'Fee 2',
          e_tel: '081-987-4568',
          e_mail: 'Fee_2@gmail.com',
          t_id: 4
        }, {
          e_id: 7,
          e_name: 'Rosmee 2',
          e_tel: '081-987-4568',
          e_mail: 'Rosmee_2@gmail.com',
          t_id: 5
        }, {
          e_id: 8,
          e_name: 'prateep 2',
          e_tel: '081-987-4568',
          e_mail: 'prateep_2@gmail.com',
          t_id: 6
        }, {
          e_id: 9,
          e_name: 'Armando',
          e_tel: '081-987-4568',
          e_mail: 'Armando@gmail.com',
          t_id: 1
        }, {
          e_id: 10,
          e_name: 'Tongdee',
          e_tel: '081-987-4568',
          e_mail: 'Tongdee@gmail.com',
          t_id: 1
        }, {
          e_id: 11,
          e_name: 'Fee 1',
          e_tel: '081-987-4568',
          e_mail: 'Fee_1@gmail.com',
          t_id: 2
        }, {
          e_id: 12,
          e_name: 'tae 1',
          e_tel: '081-987-4568',
          e_mail: 'tae_1@gmail.com',
          t_id: 3
        }, {
          e_id: 13,
          e_name: 'tae 2',
          e_tel: '081-987-4568',
          e_mail: 'tae_2@gmail.com',
          t_id: 3
        }, {
          e_id: 14,
          e_name: 'Fee 2',
          e_tel: '081-987-4568',
          e_mail: 'Fee_2@gmail.com',
          t_id: 4
        }, {
          e_id: 15,
          e_name: 'Rosmee 2',
          e_tel: '081-987-4568',
          e_mail: 'Rosmee_2@gmail.com',
          t_id: 5
        }, {
          e_id: 16,
          e_name: 'prateep 2',
          e_tel: '081-987-4568',
          e_mail: 'prateep_2@gmail.com',
          t_id: 6
        }
      ]
    };
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {

    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.

    this.initTreeView();
  }
  initFormLogin() {
    this.formSearch = this.fb.group({
      searchText: ['']
    });
    this.formSearch.get('searchText').valueChanges.subscribe(selectValue => {
      if (selectValue !== '') {

      } else {
      }
    });
  }

  initTreeView() {
    const toggler = document.getElementsByClassName('caret');
    let i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener('click', function () {
        this.parentElement.querySelector('.nested').classList.toggle('active');
        this.classList.toggle('caret-down');
      });
    }
  }

  openModal() {
    this.modalteammemberservice.open();
  }
}
