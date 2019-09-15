import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

import {MenuComponent} from './components/menu/menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MenuComponent
  ]
})
export class SharedModule {}
