import {Component, Input, OnChanges} from '@angular/core';
import {IRepository} from '../../models/repository';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnChanges {
  @Input() repositories: IRepository[] = [];
  @Input() totalCount: number;
  selectedLanguages: string[] = [];
  languageList: string[] = [];
  notDefined = 'Not defined';

  constructor() {}

  ngOnChanges() {
    this.getUniqueLanguages();
  }

  getUniqueLanguages(): void {
    const languages = this.repositories.map((repository: IRepository) => repository.language || this.notDefined);
    this.languageList = [...new Set(languages)];
  }

  getFilteredRepositories(): IRepository[] {
    return this.repositories.filter((repository: IRepository) => {
      const language = repository.language || this.notDefined;
      if (!this.selectedLanguages.length) {
        return true;
      }

      return this.selectedLanguages.includes(language);
    });
  }
}
