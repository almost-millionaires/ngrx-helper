import { createAction, props } from '@ngrx/store';
import { Apple } from '../models/apple.model';

export const GET_APPLES = '[Apple Page] Get Apples';
export const APPLES_LOADING_SUCCESS =
  '[Apple Page] Get Apples Success';
export const APPLES_LOADING_FAILURE =
  '[Apple Get Apples Failure';

export const getApples = createAction(
  GET_APPLES,
  props<{ param: string }>()
);

export const loadingApplesSuccess = createAction(
  APPLES_LOADING_SUCCESS,
  props<{ apples: ReadonlyArray<Apple> }>()
);

export const loadingApplesFailure = createAction(
  APPLES_LOADING_FAILURE,
  props<{ message: string }>()
);
