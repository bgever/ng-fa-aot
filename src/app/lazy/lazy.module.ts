import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';

@NgModule({
  declarations: [LazyComponent],
  imports: [
    SharedModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
