import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counters-comments',
  templateUrl: './counter-comments.component.html',
  styleUrls: ['./counter-comments.component.scss'],
})
export class CounterCommentsComponent {
  @Input() public counter!: string;

  @Output() public comments: EventEmitter<string> = new EventEmitter();

  onComments() {
    this.comments.emit(this.counter);
  }
}
