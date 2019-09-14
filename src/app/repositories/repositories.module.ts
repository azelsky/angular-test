import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {RepositoriesRoutingModule} from './repositories-routing.module';
import {SharedModule} from '../shared/shared.module';

import {SearchComponent} from './search/search.component';
import {SearchFieldComponent} from './search-field/search-field.component';


@NgModule({
  declarations: [SearchComponent, SearchFieldComponent],
  imports: [
    CommonModule,
    SharedModule,
    RepositoriesRoutingModule,
    FormsModule
  ]
})
export class RepositoriesModule {}

