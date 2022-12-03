import { Component, Input, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() notice: boolean = false;
  crossMenuAnimation = gsap.timeline({ paused: true })
  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.crossMenuAnimation.to(".hamburger-container", 0, { justifyContent: 'center' })
      .to(".l1", 0.5, { transform: "rotate(45deg)", position: "absolute", width: "100%", top: "9px" })
      .to(".l2", 0.2, { opacity: 0 }, "-=0.5")
      .to(".l3", 0.5, { transform: "rotate(-45deg)", position: "absolute", width: "100%", bottom: "9px" }, "-=0.5")
  }

  openMenu() {
    this.crossMenuAnimation.play();
    this.isOpen = true;
  }

  closeMenu() {
    this.crossMenuAnimation.reverse();
    this.isOpen = false;
  }

}
