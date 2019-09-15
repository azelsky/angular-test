import { Component, OnInit } from '@angular/core';
import {FavoritesService} from '../shared/services/favorites.service';
import {IRepository} from '../shared/models/repository';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  repositories: IRepository[] = [];
  totalCount: number;

  constructor(
    private favoritesService: FavoritesService
  ) { }

  ngOnInit() {
    this.getRepositories();
  }

  getRepositories() {
    this.repositories = this.favoritesService.getFavorites();
    this.totalCount = this.repositories.length;
  }
}
