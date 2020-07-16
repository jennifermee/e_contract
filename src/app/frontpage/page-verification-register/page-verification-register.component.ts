import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare var $: any;
@Component({
  selector: 'app-page-verification-register',
  templateUrl: './page-verification-register.component.html',
  styleUrls: ['./page-verification-register.component.scss']
})
export class PageVerificationRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('body').scrollspy({
      target: '#mainNav',
      offset: 50
    });

    // Collapse Navbar
    var navbarCollapse = function () {
      if ($("#mainNav").offset().top > 50) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  }

}
