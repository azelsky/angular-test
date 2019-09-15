import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {RepositoriesRoutingModule} from './repositories-routing.module';
import {SharedModule} from './shared/shared.module';
import {SharedModule as CommonSharedModule} from '../shared/shared.module';
import {PipesModule} from './shared/pipes/pipes.module';

import {SearchComponent} from './search/search.component';
import {SearchFieldComponent} from './search-field/search-field.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { RepositoryComponent } from './repository/repository.component';
import { FavoritesComponent } from './favorites/favorites.component';


@NgModule({
  declarations: [SearchComponent, SearchFieldComponent, RepositoryListComponent, RepositoryComponent, FavoritesComponent],
  imports: [
    CommonModule,
    SharedModule,
    CommonSharedModule,
    RepositoriesRoutingModule,
    FormsModule,
    PipesModule
  ]
})
export class RepositoriesModule {}

