import {Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

import {RepositoriesService} from '../../services/repositories.service';

import {IRepository, ISearchResult} from '../../models/repository';
import {FavoritesService} from '../../services/favorites.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnDestroy {
  sub = new Subscription();
  repositories: IRepository[];
  totalCount: number;

  constructor(
    private repositoriesService: RepositoriesService,
    private favoritesService: FavoritesService
  ) {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSearch(text: string): void {
    const subscription = this.repositoriesService.search(text)
      .subscribe((result: ISearchResult) => {
        this.repositories = result.items;
        this.totalCount = result.total_count;
        this.isFavorite();
    });

    this.sub.add(subscription);
  }

  isFavorite() {
    const favorites = this.favoritesService.getFavorites();
    this.repositories.forEach((repository: IRepository) => {
      const isFavorite = favorites.find((favorite: IRepository) => favorite.id === repository.id);
      repository.isFavorite = Boolean(isFavorite);
    });
  }
}
