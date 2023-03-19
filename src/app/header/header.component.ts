import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isVisibleFilterSettings = false;

  @Output() sortByDate: EventEmitter<void> = new EventEmitter();

  @Output() sorByViews: EventEmitter<void> = new EventEmitter();

  @Output() search: EventEmitter<string> = new EventEmitter();

  @Input() searchText: string | undefined;

  toggle() {
    this.isVisibleFilterSettings = !this.isVisibleFilterSettings;
  }

  handleClickDate() {
    this.sortByDate.emit();
  }

  handleClickViews() {
    this.sorByViews.emit();
  }

  handleClickSearch() {
    this.search.emit(this.searchText);
  }
}