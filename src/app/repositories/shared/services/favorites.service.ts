import {Injectable} from '@angular/core';
import {IRepository} from '../models/repository';
import {SharedModule} from '../shared.module';

@Injectable({
  providedIn: SharedModule
})
export class FavoritesService {

  constructor() {
  }

  manipulateFavorites(repository: IRepository): void {
    const favorites = this.getFavorites();
    if (repository.isFavorite) {
      this.addToFavorites(favorites, repository);
    } else {
      this.deleteFromFavorites(favorites, repository);
    }
  }

  getFavorites(): IRepository[] {
    const favoriteRepositories = localStorage.favoriteRepositories;
    if (favoriteRepositories) {
      return JSON.parse(favoriteRepositories);
    }
    return [];
  }

  private addToFavorites(favorites: IRepository[], repository: IRepository): void {
    localStorage.setItem('favoriteRepositories', JSON.stringify([...favorites, repository]));
  }

  private deleteFromFavorites(favorites: IRepository[], repository: IRepository): void {
    const updatedFavorites = favorites.filter((favorite: IRepository) => {
      return favorite.id !== repository.id;
    });
    localStorage.setItem('favoriteRepositories', JSON.stringify(updatedFavorites));
  }
}
