import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {

  faPaperPlane = faPaperPlane;

  ngOnInit(): void {
    const noticeAnimation = gsap.timeline()
    noticeAnimation.fromTo(".n1", 10, { left: "0px" }, { left: "-533px", ease: "none", repeat: -1 })
      .fromTo(".n2", 10, { left: "533px" }, { left: "0px", ease: "none", repeat: -1 }, "-=10")
      .fromTo(".n3", 10, { left: "calc(533px * 2)" }, { left: "calc(533px * 1)", ease: "none", repeat: -1 }, "-=10")
      .fromTo(".n4", 10, { left: "calc(533px * 3)" }, { left: "calc(533px * 2)", ease: "none", repeat: -1 }, "-=10")
      .fromTo(".n5", 10, { left: "calc(533px * 4)" }, { left: "calc(533px * 3)", ease: "none", repeat: -1 }, "-=10")
      .fromTo(".n6", 10, { left: "calc(533px * 5)" }, { left: "calc(533px * 4)", ease: "none", repeat: -1 }, "-=10")
      .fromTo(".n7", 10, { left: "calc(533px * 6)" }, { left: "calc(533px * 5)", ease: "none", repeat: -1 }, "-=10")
      .fromTo(".n8", 10, { left: "calc(533px * 7)" }, { left: "calc(533px * 6)", ease: "none", repeat: -1 }, "-=10")
      .fromTo(".n9", 10, { left: "calc(533px * 8)" }, { left: "calc(533px * 7)", ease: "none", repeat: -1 }, "-=10")
      .fromTo(".n10", 10, { left: "calc(533px * 9)" }, { left: "calc(533px * 8)", ease: "none", repeat: -1 }, "-=10")
  }

}
