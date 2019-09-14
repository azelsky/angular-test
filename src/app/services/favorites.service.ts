import {Injectable} from '@angular/core';
import {IRepository} from '../models/repository';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  updateFavorites = new Subject();
  updateFavoritesListener  = this.updateFavorites.asObservable();

  constructor() {
  }

  manipulateFavorites(repository: IRepository): void {
    const favorites = this.getFavorites();
    if (repository.isFavorite) {
      this.addToFavorites(favorites, repository);
    } else {
      this.deleteFromFavorites(favorites, repository);
    }
    this.updateFavorites.next();
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
