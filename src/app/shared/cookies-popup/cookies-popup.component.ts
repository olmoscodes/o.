import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-cookies-popup',
  templateUrl: './cookies-popup.component.html',
  styleUrls: ['./cookies-popup.component.scss']
})
export class CookiesPopupComponent implements OnInit {

  popupAnimationIN = gsap.timeline()
  popupAnimationOUT = gsap.timeline()

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.popupAnimationIN.fromTo(".cookies-box", 1.5, { opacity: 0, y: "20px" }, { opacity: 1, y: "0px", ease: "power4.out" }, "+=0.5")
    .to(".o-cookie", 0.5,  {backgroundColor: "black"})
    .to(".mini-choc", 0.5, {opacity: 1})
    .to(".bite1", 0.2, {opacity: 1})
    .to(".bite2", 0.2, {opacity: 1})
    .to(".bite3", 0.2, {opacity: 1}, '-=0.2')
  }

  acceptCookies() {
    this.popupAnimationOUT.fromTo(".cookies-box", 0.5, { opacity: 1 }, { opacity: 0, ease: "none" }).then(() => {
      sessionStorage.setItem('analytics-on', 'true')
      location.reload()
    })
  }

  declineCookies() {
    this.popupAnimationOUT.fromTo(".cookies-box", 0.5, { opacity: 1 }, { opacity: 0, ease: "none" }).then(() => {
      sessionStorage.setItem('analytics-on', 'false')
      location.reload()
    })
  }

}
