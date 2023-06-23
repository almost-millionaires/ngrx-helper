import { Injectable, inject } from '@angular/core';
import { Potato } from '../models/potato.model';
import {
  ComponentStore,
  OnStoreInit,
  tapResponse,
} from '@ngrx/component-store';
import {
  EMPTY,
  Observable,
  finalize,
  switchMap,
  tap,
} from 'rxjs';
import { PotatoService } from '../service/potato.service';

export interface PotatoState {
  readonly potatoes: ReadonlyArray<Potato>;
  readonly isLoading: boolean;
}

const initialState: PotatoState = {
  potatoes: [],
  isLoading: false,
};

@Injectable()
export class PotatoStore
  extends ComponentStore<PotatoState>
  implements OnStoreInit
{
  readonly #potatoService = inject(PotatoService);

  readonly potatoes$ = this.select(
    (state) => state.potatoes
  );
  readonly isLoading$ = this.select(
    (state) => state.isLoading
  );

  // you can combine selectors from existed selectors
  readonly combineSelector$ = this.select(
    this.potatoes$,
    this.isLoading$,
    (potato, isLoading) => ({
      potato,
      isLoading,
    })
  );

  constructor() {
    super(initialState);
  }

  readonly getPotato = this.effect(
    (params$: Observable<string>) =>
      params$.pipe(
        tap(() => this.setIsLoadingState(true)),
        switchMap((param) =>
          this.#potatoService.getPotatoes(param).pipe(
            tapResponse(
              (potatoes) => this.patchState({ potatoes }),
              () => EMPTY // you can put here error
            ),
            finalize(() => this.setIsLoadingState(false))
          )
        ),
        
      )
  );

  readonly setIsLoadingState = this.updater(
    (state, isLoading: boolean) => ({
      ...state,
      isLoading,
    })
  );

  ngrxOnStoreInit() {
    // you call call it here if you don't have to pass params
    // from ui and want to load in then you open page
    // this.getPotato();
  }
}
