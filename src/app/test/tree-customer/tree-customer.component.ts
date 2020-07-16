import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tree-customer',
  templateUrl: './tree-customer.component.html',
  styleUrls: ['./tree-customer.component.scss']
})
export class TreeCustomerComponent implements OnInit {
  empDataList: any;
  objTable: any;
  name: String;
  tel: String;
  team: String;
  department: String;
  email: String;
  constructor() {
  }

  ngOnInit(): void {
    this.objTable = [];
    this.empDataList = {
      department: [
        {
          "d_id": 1,
          "d_name": "Sales"
        }, {
          "d_id": 2,
          "d_name": "Manufacturing"
        }, {
          "d_id": 3,
          "d_name": "Production Control"
        }, {
          "d_id": 4,
          "d_name": "Quality Control"
        }, {
          "d_id": 5,
          "d_name": "Technical"
        }, {
          "d_id": 6,
          "d_name": "Credit and Legal"
        }
      ],
      tames: [
        {
          "t_id": 1,
          "t_name": "Sales Tames 1",
          "d_id": 1
        }, {
          "t_id": 2,
          "t_name": "Manufacturing Tames 1",
          "d_id": 2
        }, {
          "t_id": 3,
          "t_name": "Production Control Tames 1",
          "d_id": 3
        }, {
          "t_id": 4,
          "t_name": "Quality Control Tames 1",
          "d_id": 4
        }, {
          "t_id": 5,
          "t_name": "Technical Tames 1",
          "d_id": 5
        }, {
          "t_id": 6,
          "t_name": "Credit and Legal Tames 1",
          "d_id": 6
        }
      ],
      emp: [
        {
          "e_id": 1,
          "e_name": "Armando",
          "e_tel": "081-987-4568",
          "e_mail": "Armando@gmail.com",
          "t_id": 1
        }, {
          "e_id": 2,
          "e_name": "Tongdee",
          "e_tel": "081-987-4568",
          "e_mail": "Tongdee@gmail.com",
          "t_id": 1
        }, {
          "e_id": 3,
          "e_name": "Fee 1",
          "e_tel": "081-987-4568",
          "e_mail": "Fee_1@gmail.com",
          "t_id": 2
        }, {
          "e_id": 4,
          "e_name": "tae 1",
          "e_tel": "081-987-4568",
          "e_mail": "tae_1@gmail.com",
          "t_id": 3
        }, {
          "e_id": 5,
          "e_name": "tae 2",
          "e_tel": "081-987-4568",
          "e_mail": "tae_2@gmail.com",
          "t_id": 3
        }, {
          "e_id": 6,
          "e_name": "Fee 2",
          "e_tel": "081-987-4568",
          "e_mail": "Fee_2@gmail.com",
          "t_id": 4
        }, {
          "e_id": 7,
          "e_name": "Rosmee 2",
          "e_tel": "081-987-4568",
          "e_mail": "Rosmee_2@gmail.com",
          "t_id": 5
        }, {
          "e_id": 8,
          "e_name": "prateep 2",
          "e_tel": "081-987-4568",
          "e_mail": "prateep_2@gmail.com",
          "t_id": 6
        }
      ]
    }

  }

  torgerTree(id_el) {
    let el = document.getElementById(id_el);
    let ac = el.getAttribute('class')
    if (ac == 'activate') {
      el.setAttribute('class', 'noactivate');
    } else {
      el.setAttribute('class', 'activate');
    }
  }

  pushDataEmp(emp_id) {

    let arr = this.objTable;
    let emp_data = this.empDataList.emp.filter(res => res.e_id == emp_id)[0];
    let tames_data = this.empDataList.tames.filter(res => res.t_id == emp_data.t_id)[0];
    let department_data = this.empDataList.department.filter(res => res.d_id == tames_data.d_id)[0];

    let obj = {
      e_id: emp_data.e_id,
      e_name: emp_data.e_name,
      e_tel: emp_data.e_tel,
      e_mail: emp_data.e_mail,
      t_id: tames_data.t_id,
      t_name: tames_data.t_name,
      d_id: department_data.d_id,
      d_name: department_data.d_name
    };

    let index = arr.findIndex(res => res.e_id === obj.e_id);

    if (index > -1) {
      arr.splice(index, 1);
    } else {
      arr.push(obj);
    }
    this.objTable = arr;
  }

  onAdd() {

    let arr = this.objTable;
    let obj = {
      e_name: this.name,
      e_tel: this.tel,
      e_mail: this.email,
      t_name: this.team,
      d_name: this.department
    };

    arr.push(obj);
    this.objTable = arr;
    this.name = '';
    this.tel = '';
    this.email = '';
    this.team = '';
    this.department = '';

  }
}
