import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const introAnimation = gsap.timeline()
    introAnimation.fromTo(".o-intro", 1, { opacity: 0, width: "0px", height: "0px" }, { opacity: 1, width: "20px", height: "20px", ease: "power4.out" })
      .fromTo(".dot-intro", 0.5, { opacity: 0, x: "-10px" }, { opacity: 1, x: "0px" }, '-=0')
      .to("app-intro", { opacity: 0 }, "+=2")
      .to("app-intro", { display: "none" }, "-=0.5")
  }

}
