import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Potato } from '../models/potato.model';

@Injectable()
export class PotatoService {
  getPotatoes(
    param: string
  ): Observable<ReadonlyArray<Potato>> {
    // if you need param for api call
    return of<ReadonlyArray<Potato>>([
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
