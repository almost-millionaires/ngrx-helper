import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { AppleState } from './reducers';

export const FEATURE_STORE_KEY = 'apple';

export const getAppleState =
  createFeatureSelector<AppleState>(FEATURE_STORE_KEY);

export const getApplesSelector = createSelector(
  getAppleState,
  (state: AppleState) => state.apples
);

export const isAppleLoadingSelector = createSelector(
  getAppleState,
  (state: AppleState) => state.isLoading
);
