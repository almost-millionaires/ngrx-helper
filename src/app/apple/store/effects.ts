import { Injectable, inject } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import {
  map,
  exhaustMap,
  catchError,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { AppleService } from '../service/apple.service';
import {
  getApples,
  loadingApplesFailure,
  loadingApplesSuccess,
} from './actions';

@Injectable()
export class AppleEffects {
  readonly #appleService = inject(AppleService);

  constructor(private actions$: Actions) {}

  getApples$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getApples),
      exhaustMap((action) =>
        this.#appleService.getApples(action.param).pipe(
          map((apples) => loadingApplesSuccess({ apples })),
          catchError((error: string) =>
            of(loadingApplesFailure({ message: error }))
          )
        )
      )
    )
  );
}
