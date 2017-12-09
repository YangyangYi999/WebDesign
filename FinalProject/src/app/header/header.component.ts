import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  @ViewChild('searchBarBtn', {read: ElementRef}) searchBarBtn: ElementRef;
  @ViewChild('searchBarInput', {read: ElementRef}) searchBarInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  // noinspection TsLint
  btnAnimation = false;
  // noinspection TsLint
  searchBarVisible = false;
  // noinspection TsLint
  borderBottom = false;

  changeBorder() {
    this.borderBottom = !this.borderBottom;
  }

  borderBottomStyle() {
    const styles = {
      'border-bottom': '1px solid #80bdff'
    };
    // noinspection TsLint
    if ( this.borderBottom )
    return styles;
  }

  showSearchBar() {
    this.searchBarVisible = !this.searchBarVisible;
  }

  onClickBtn() {
    this.btnAnimation = !this.btnAnimation;
  }

}
