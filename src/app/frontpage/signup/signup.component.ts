import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  faPaperPlane = faPaperPlane;
  constructor() { }

  ngOnInit(): void {
  }

}
