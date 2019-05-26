import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { PageService } from './page/page.service';
import { PageTitleService } from "./page-title/page-title.service";
import { PageComponent } from './page/page.component';

// import { getURLSegmentObject as getURLSegmentArray } from '../utils/url-segment-object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isStickyHeader = false;
  public isNavOpen = false;

  constructor(
    private titleService: PageTitleService,
    private pageService: PageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    document.body.addEventListener('scroll', () => {
      if (document.body.scrollTop > 320 && !this.isStickyHeader) {
        this.isStickyHeader = true;
      } else if (document.body.scrollTop < 320 && this.isStickyHeader) {
        this.isStickyHeader = false;
      }
    });
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  get pages() {
    const result = this.pageService.getPages();
    return result;
  }

  get title() {
    return this.titleService.title;
  }
}
