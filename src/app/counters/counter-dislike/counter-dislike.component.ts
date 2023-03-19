import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counters-dislike',
  templateUrl: './counter-dislike.component.html',
  styleUrls: ['./counter-dislike.component.scss'],
})
export class CounterDislikeComponent {
  @Input() public counter!: string;

  @Output() public dislike: EventEmitter<string> = new EventEmitter();

  onDislike() {
    this.dislike.emit(this.counter);
  }
}
