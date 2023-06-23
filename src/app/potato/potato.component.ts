import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { PotatoStore } from './store/potato.store';
import { provideComponentStore } from '@ngrx/component-store';

// provideComponentStore you need if
// you want to use ngrxOnStoreInit/ngrxOnStateInit hooks

@Component({
  selector: 'app-potato',
  templateUrl: 'potato.component.html',
  providers: [provideComponentStore(PotatoStore)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PotatoComponent implements OnInit {
  readonly #potatoStore = inject(PotatoStore);

  readonly potatoes$ = this.#potatoStore.potatoes$;
  readonly isLoading$ = this.#potatoStore.isLoading$;

  ngOnInit() {
    // you can also load it inside store hooks check comments
    this.#potatoStore.getPotato('all');
  }
}
