import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  public login(credentials) {
    // returna en observable
    return this.http.get('http://94.46.140.3:8080/milo_recipe_backend/resources/login',
      {headers: new HttpHeaders().set('Authorization', credentials)});
  }

  public createUser(username, password) {
    let user = {
      username: username,
      password: password
    };
    const url = 'http://94.46.140.3:8080/milo_recipe_backend/resources/user';
    return this.http.post(url, user,
      {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

}
