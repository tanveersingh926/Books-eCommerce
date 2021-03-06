import { Component } from '@angular/core';
import { HTTPStatus } from './auth/http.interceptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  HTTPActivity: boolean;
  constructor(private httpStatus: HTTPStatus) {
    this.httpStatus.getHttpStatus().subscribe(
      (status: boolean) => {
        this.HTTPActivity = status;
      }
    );
  }
}
