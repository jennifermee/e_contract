import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-member',
  templateUrl: './import-member.component.html',
  styleUrls: ['./import-member.component.scss']
})
export class ImportMemberComponent implements OnInit {
  empDataList: any;
  objTable: any;
  name: string;
  tel: string;
  team: string;
  department: string;
  email: string;
  constructor(

  ) { }

  ngOnInit(): void {
    this.objTable = [];
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
