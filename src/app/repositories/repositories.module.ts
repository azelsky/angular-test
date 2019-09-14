import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RepositoriesRoutingModule} from './repositories-routing.module';
import {SharedModule} from '../shared/shared.module';

import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    RepositoriesRoutingModule
  ]
})
export class RepositoriesModule { }
