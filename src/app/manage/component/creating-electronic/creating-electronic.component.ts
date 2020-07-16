import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
@Component({
  selector: 'app-creating-electronic',
  templateUrl: './creating-electronic.component.html',
  styleUrls: ['./creating-electronic.component.scss']
})
export class CreatingElectronicComponent implements OnInit {
  sidebar: any = 'create_an_electronic';
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  constructor() { }

  ngOnInit(): void {
  }


}
