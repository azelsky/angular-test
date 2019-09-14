import {Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

import {RepositoriesService} from '../../services/repositories.service';

import {IRepository} from '../../models/repository';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnDestroy {
  sub = new Subscription();

  constructor(
    private repositoriesService: RepositoriesService
  ) {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSearch(text: string): void {
    const subscription = this.repositoriesService.search(text)
      .subscribe((repositories: IRepository[]) => {
        console.log(repositories);
    });

    this.sub.add(subscription);
  }
}
