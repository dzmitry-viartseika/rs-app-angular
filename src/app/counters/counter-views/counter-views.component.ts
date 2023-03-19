import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counters-views',
  templateUrl: './counter-views.component.html',
  styleUrls: ['./counter-views.component.scss'],
})
export class CounterViewsComponent {
  @Input() public counter!: string;

  @Output() public views: EventEmitter<string> = new EventEmitter();

  onViews() {
    this.views.emit(this.counter);
  }
}
