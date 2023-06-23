import { NgModule } from '@angular/core';
import { AppleComponent } from './apple.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { AppleEffects } from './store/effects';
import { AppleService } from './service/apple.service';
import { FEATURE_STORE_KEY } from './store/selectors';

const router: Routes = [
  { path: '', component: AppleComponent },
];

@NgModule({
  declarations: [AppleComponent],
  providers: [AppleService],
  imports: [
    NgFor,
    AsyncPipe,
    NgIf,
    RouterModule.forChild(router),
    StoreModule.forFeature(FEATURE_STORE_KEY, reducer),
    EffectsModule.forFeature([AppleEffects])
  ],
})
export class AppleModule {}
