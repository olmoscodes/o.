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
    noticeAnimation.fromTo(".n1", 5, { left: "0" }, { left: "-574px", ease: "none", repeat: -1 })
      .fromTo(".n2", 5, { left: "574px" }, { left: "0", ease: "none", repeat: -1 }, "-=5")
      .fromTo(".n3", 5, { left: "1148px" }, { left: "574px", ease: "none", repeat: -1 }, "-=5")
      .fromTo(".n4", 5, { left: "1722px" }, { left: "1148px", ease: "none", repeat: -1 }, "-=5")
      .fromTo(".n5", 5, { left: "2296px" }, { left: "1722px", ease: "none", repeat: -1 }, "-=5")
      .fromTo(".n6", 5, { left: "2870px" }, { left: "2296px", ease: "none", repeat: -1 }, "-=5")
      .fromTo(".n7", 5, { left: "3444px" }, { left: "2870px", ease: "none", repeat: -1 }, "-=5")
      .fromTo(".n8", 5, { left: "4018px" }, { left: "3444px", ease: "none", repeat: -1 }, "-=5")
      .fromTo(".n9", 5, { left: "4592px" }, { left: "4018px", ease: "none", repeat: -1 }, "-=5")
      .fromTo(".n10", 5, { left: "5166px" }, { left: "4592px", ease: "none", repeat: -1 }, "-=5")
  }

}
