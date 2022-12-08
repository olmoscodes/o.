import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/all';

gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  words: Array<string> = ['Marc', 'from Barcelona', 'a Fullstack Developer', 'a Web Motion Designer'];

  constructor() { }

  ngOnInit(): void {

    gsap.timeline().fromTo(".introduction", 0.5, { opacity: 0 }, { opacity: 1, onComplete: () => { masterTl.play(), typeLine.play() } }, "+=4.5");

    let typeLine = gsap.timeline({ repeat: -1, yoyo: true }).pause();
    typeLine.fromTo('.typeLine', 0.4, { opacity: 0 }, { opacity: 1 })

    let masterTl = gsap.timeline({ repeat: -1, delay: 1 }).pause();

    this.words.forEach(word => {
      let timeDuration = word.length * 0.1
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })
      tl.to('.text', { duration: timeDuration, text: word, ease: 'none' })
      masterTl.add(tl)
    })
  }


}
