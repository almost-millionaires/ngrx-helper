import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { getApples } from './store/actions';
import { getApplesSelector, isAppleLoadingSelector } from './store/selectors';

@Component({
  selector: 'app-apple',
  templateUrl: 'apple.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppleComponent implements OnInit {
  readonly apples$ = this.store.select(getApplesSelector);
  readonly isLoading$ = this.store.select(isAppleLoadingSelector);

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(getApples({ param: 'all' }));
  }
}
