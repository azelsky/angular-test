import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu = [
    {name: 'Search Repositories', link: '/search'},
    {name: 'Favorites Repositories', link: '/favorites'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
