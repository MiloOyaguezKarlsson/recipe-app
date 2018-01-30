import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  loggedIn;
  username;

  ngOnInit() {
    if (localStorage.getItem('loggedIn')) {
      this.loggedIn = true;
      this.username = localStorage.getItem('username');
    }
  }

  public logOut() {
    localStorage.clear();
  }

}
