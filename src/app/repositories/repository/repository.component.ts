import {Component, Input, OnInit} from '@angular/core';

import {IRepository} from '../shared/models/repository';
import {FavoritesService} from '../shared/services/favorites.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {
  @Input() repository: IRepository;

  constructor(
    private favoritesService: FavoritesService,
  ) { }

  ngOnInit() {
  }

  updateFavoriteStatus(repository: IRepository): void {
    repository.isFavorite = !repository.isFavorite;
    this.favoritesService.manipulateFavorites(repository);
  }

}
