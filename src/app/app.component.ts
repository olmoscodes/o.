import { Component, OnInit } from '@angular/core';

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
}
