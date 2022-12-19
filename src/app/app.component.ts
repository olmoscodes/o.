import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'olmoscodes';
  cookiesConfig: boolean = false;
  isPre: boolean = false;

  ngOnInit(): void {
    this.cookiesConfig = !sessionStorage.getItem('analytics-on') ? true : false;
    this.isPre = /pre/.test(window.location.href)
  }

  runCommingSoonAnimation() {
    const coomingSoonAnimation = gsap.timeline()
    coomingSoonAnimation.fromTo(".under-construction", 1, { opacity: 0, y: "+10px" }, { opacity: 1, y: "0px", ease: "power4.out" }, "+=4")
  }
}
