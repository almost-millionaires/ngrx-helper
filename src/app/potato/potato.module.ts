import { NgModule } from '@angular/core';
import { PotatoComponent } from './potato.component';
import { RouterModule, Routes } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { PotatoService } from './service/potato.service';

const router: Routes = [{ path: '', component: PotatoComponent }];

@NgModule({
  declarations: [PotatoComponent],
  imports: [RouterModule.forChild(router), NgFor, AsyncPipe, NgIf],
  providers: [PotatoService],
})
export class PotatoModule {}
