import { Component, OnInit } from '@angular/core';
import { faMapMarkedAlt, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faGithub} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  faMapMarkedAlt = faMapMarkedAlt;
  faEnvelope = faEnvelope;
  faMobileAlt = faMobileAlt;
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faGithub = faGithub;
  constructor() { }

  ngOnInit(): void {
  }

}
