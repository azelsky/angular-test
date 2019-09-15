import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterByLanguagePipe} from './filter-by-language.pipe';



@NgModule({
  declarations: [FilterByLanguagePipe],
  imports: [
    CommonModule
  ],
  exports: [FilterByLanguagePipe]
})
export class PipesModule { }
