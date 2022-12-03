import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cookies-popup',
  templateUrl: './cookies-popup.component.html',
  styleUrls: ['./cookies-popup.component.scss']
})
export class CookiesPopupComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  acceptCookies() {
    sessionStorage.setItem('analytics-on', 'true')
    location.reload()
  }

  declineCookies() {
    sessionStorage.setItem('analytics-on', 'false')
    location.reload()
  }

}
