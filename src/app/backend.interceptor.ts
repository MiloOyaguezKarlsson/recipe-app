import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let basic_credentials = '';

    if (localStorage.getItem('loggedIn')) {
      basic_credentials = localStorage.getItem('loggedIn');
    }

    const newRequest = req.clone({
      headers: req.headers.set(
        'Authorization', basic_credentials
      )
    });

    return next.handle(newRequest);
  }
}
