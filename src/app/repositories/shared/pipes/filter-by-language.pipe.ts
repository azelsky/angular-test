import {Pipe, PipeTransform} from '@angular/core';
import {IFilterElement} from '../models/filter-element';
import {IRepository} from '../models/repository';

@Pipe({
  name: 'filterByLanguage'
})
export class FilterByLanguagePipe implements PipeTransform {

  transform(items: IFilterElement[], languages: string[]): any {
    return items.filter((repository: IRepository) => {
      const language = repository.language || 'Not defined';
      if (!languages.length) {
        return true;
      }

      return languages.includes(language);
    });
  }

}
