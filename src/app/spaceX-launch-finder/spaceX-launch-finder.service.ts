import { LaunchInterface } from './models/launch.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

const SPACEX_BASE_API: string = 'https://api.spacexdata.com/v4/launches';
@Injectable()
export class SpaceXLaunchFinderService {
  constructor(private http: HttpClient) {}

  getPastLaunches(): Observable<LaunchInterface[]> {
    return this.http.get(`${SPACEX_BASE_API}/past`).pipe(
      map((response: LaunchInterface[]) => {
        return response;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getLatestLaunch(): Observable<LaunchInterface> {
    return this.http.get(`${SPACEX_BASE_API}/latest`).pipe(
      map((response: LaunchInterface) => {
        return response;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
