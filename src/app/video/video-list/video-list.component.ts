import { Component, EventEmitter, Input, Output } from '@angular/core';
import IPost from '../../models/IPost';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent {
  @Input() public list: IPost[] | undefined;

  @Output() public like: EventEmitter<IPost> = new EventEmitter();

  @Output() public dislike: EventEmitter<IPost> = new EventEmitter();

  @Output() public views : EventEmitter<IPost> = new EventEmitter();

  @Output() public comments : EventEmitter<IPost> = new EventEmitter();

  handleClickLike(targetPost: IPost) {
    this.like.emit(targetPost);
  }

  handleClickDislike(targetPost: IPost) {
    this.dislike.emit(targetPost);
  }

  handleClickViews(targetPost: IPost) {
    this.views.emit(targetPost);
  }

  handleClickComments(targetPost: IPost) {
    this.comments.emit(targetPost);
  }
}
