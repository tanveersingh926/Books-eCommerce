import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
// import 'rxjs/add/observable/throw';

@Injectable()
export class HTTPStatus {
  private requestInFlight$: BehaviorSubject<boolean>;
  constructor() {
    this.requestInFlight$ = new BehaviorSubject(false);
  }

  setHttpStatus(inFlight: boolean) {
    this.requestInFlight$.next(inFlight);
  }

  getHttpStatus(): Observable<boolean> {
    return this.requestInFlight$.asObservable();
  }
}

@Injectable()
export class HTTPListener implements HttpInterceptor {
  constructor(private status: HTTPStatus) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map(event => {
        this.status.setHttpStatus(true);
        return event;
      }),
      catchError(error => {
        alert('Something Went Wrong. PLease try again later.');
        return throwError(error);
      }),
      finalize(() => {
        this.status.setHttpStatus(false);
      })
    );
  }
}
