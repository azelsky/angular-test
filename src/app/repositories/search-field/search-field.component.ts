import {Component, EventEmitter, OnInit, OnDestroy, Output} from '@angular/core';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit, OnDestroy {
  sub = new Subscription();
  inputChanged: Subject<string> = new Subject<string>();

  @Output() search: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.initInputListener();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  initInputListener(): void {
    const subscription = this.inputChanged.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    )
      .subscribe((text: string) => {
        if (text) {
          this.search.next(text);
        }
      });

    this.sub.add(subscription);
  }

  changed(text: string): void {
    this.inputChanged.next(text);
  }
}
