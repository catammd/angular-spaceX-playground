import { LaunchInterface } from './models/launch.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const SPACEX_ALL_LAUNCHES_API: string =
  'https://api.spacexdata.com/v4/launches/past';
const SPACEX_LATEST_LAUNCH_API: string =
  'https://api.spacexdata.com/v4/launches/latest';
@Injectable()
export class SpaceXLaunchFinderService {
  constructor(private http: HttpClient) {}

  getLaunches(): Observable<LaunchInterface[]> {
    return this.http.get(SPACEX_ALL_LAUNCHES_API).pipe(
      map((response: LaunchInterface[]) => {
        return response;
      })
    );
  }

  getLatestLaunch(): Observable<LaunchInterface> {
    return this.http.get(SPACEX_LATEST_LAUNCH_API).pipe(
      map((response: LaunchInterface) => {
        return response;
      })
    );
  }
}
