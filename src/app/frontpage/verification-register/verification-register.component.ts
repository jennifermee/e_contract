import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-verification-register',
  templateUrl: './verification-register.component.html',
  styleUrls: ['./verification-register.component.scss']
})
export class VerificationRegisterComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
  }

  clickFuction() {
    this.router.navigate(['/congratulations-joining']);
  }

}
