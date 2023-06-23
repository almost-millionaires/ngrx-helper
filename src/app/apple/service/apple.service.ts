import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Apple } from '../models/apple.model';

@Injectable()
export class AppleService {
  getApples(
    param: string
  ): Observable<ReadonlyArray<Apple>> {
    // if you need param for api call
    return of<ReadonlyArray<Apple>>([
      {
        count: 19,
        sort: 'Alabama',
      },
      {
        count: 10,
        sort: 'Ukrainian',
      },
      {
        count: 12,
        sort: 'Australian',
      },
    ]).pipe(delay(500));
  }
}
