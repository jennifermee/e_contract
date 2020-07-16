import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faUndo } from '@fortawesome/free-solid-svg-icons/faUndo';

@Component({
  selector: 'app-element-item',
  templateUrl: './element-item.component.html',
  styleUrls: ['./element-item.component.scss']
})
export class ElementItemComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faPlus = faPlus;
  faMinus = faMinus;
  faPrint = faPrint;
  faTimes = faTimes;
  faUndo = faUndo;
  constructor() { }

  ngOnInit(): void {
  }

}
