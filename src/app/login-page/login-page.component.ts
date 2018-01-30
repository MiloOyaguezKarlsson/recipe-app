import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(private loginService: LoginService) {
  }

  credentials;
  error;

  ngOnInit() {
  }

  public checkLogin(username, password) {
    this.credentials = 'Basic ' + btoa(username + ':' + password);
    // gör detta här för annars funkar det inte med interceptorn som lägger på authorization på login requesten
    localStorage.setItem('loggedIn', this.credentials);

    this.loginService.login(this.credentials).subscribe(data => {
      localStorage.setItem('username', username);
      this.error = null;
    }, error => {
      this.error = 'Login failed';
      localStorage.clear();
    });
  }

  public registerUser(userCredentials) {
    this.loginService.createUser(userCredentials.username, userCredentials.password).subscribe();
  }


}
