import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ZoneComponent} from './zone.component';
import {CoreModule} from '../core/core.module';

import {SharedModule} from '../shared/shared.module';
import { ZoneListComponent } from './zone-list/zone-list.component';
import { ZoneCreateComponent } from './zone-create/zone-create.component';
import { ZoneDetailComponent } from './zone-detail/zone-detail.component';

@NgModule({
  declarations: [ZoneComponent, ZoneListComponent, ZoneCreateComponent, ZoneDetailComponent],
  imports: [
    CommonModule,
    CoreModule,

    SharedModule
  ]
})
export class ZoneModule {
}
