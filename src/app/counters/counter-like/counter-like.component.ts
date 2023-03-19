import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counters-like',
  templateUrl: './counter-like.component.html',
  styleUrls: ['./counter-like.component.scss'],
})
export class CounterLikeComponent {
  @Input() public counter!: string;

  @Output() public like: EventEmitter<string> = new EventEmitter();

  onLike() {
    this.like.emit(this.counter);
  }
}
