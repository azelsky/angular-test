import {Component, Input, OnInit} from '@angular/core';
import {IRepository} from '../../models/repository';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {
  @Input() repositories: IRepository[] = [];
  @Input() totalCount: number;

  constructor() {}

  ngOnInit() {
  }

}
