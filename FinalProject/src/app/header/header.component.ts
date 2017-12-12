import {Component, OnInit} from '@angular/core';
import {UserAccountService} from '../services/userAccount.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchResult:string;

  constructor(private userAccountService: UserAccountService, private router: Router) {
  }

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
    if (this.borderBottom)
      return styles;
  }

  showSearchBar() {
    this.searchBarVisible = !this.searchBarVisible;
  }

  onClickBtn() {
    this.btnAnimation = !this.btnAnimation;
  }

  isLoggedIn() {
    return this.userAccountService.isLoggedIn();
  }

  onLogout() {
    this.userAccountService.logOut();
    this.router.navigate(['/home']);
  }

}
