import { Action, createReducer, on } from '@ngrx/store';
import { Apple } from '../models/apple.model';
import { getApples, loadingApplesSuccess } from './actions';

export interface AppleState {
  apples: ReadonlyArray<Apple>;
  isLoading: boolean;
}

export const initialState: AppleState = {
  apples: [],
  isLoading: false
};

const appleReducer = createReducer(
  initialState,
  on(getApples, (state) => ({ ...state, isLoading: true })),
  on(loadingApplesSuccess, (state, { apples }) => ({
    ...state,
    apples,
    isLoading: false
  }))
);

export function reducer(state: AppleState, action: Action) {
  return appleReducer(state, action);
}
