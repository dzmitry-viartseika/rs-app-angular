import { Component, EventEmitter, Input, Output } from '@angular/core';
import IPost from '../../models/IPost';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss'],
})
export class VideoItemComponent {
  @Input() public item!: IPost;

  @Output() public like: EventEmitter<IPost> = new EventEmitter();

  @Output() public dislike: EventEmitter<IPost> = new EventEmitter();

  @Output() public views: EventEmitter<IPost> = new EventEmitter();

  @Output() public comments: EventEmitter<IPost> = new EventEmitter();

  onLike() {
    const result = {
      ...this.item,
      statistics: {
        ...this.item.statistics,
        likeCount: String(+this.item.statistics.likeCount + 1),
      },
    };
    this.like.emit(result);
  }

  onDislike() {
    const result = {
      ...this.item,
      statistics: {
        ...this.item.statistics,
        dislikeCount: String(+this.item.statistics.dislikeCount + 1),
      },
    };
    this.dislike.emit(result);
  }

  onViews() {
    const result = {
      ...this.item,
      statistics: {
        ...this.item.statistics,
        viewCount: String(+this.item.statistics.viewCount + 1),
      },
    };
    this.views.emit(result);
  }

  onComments() {
    const result = {
      ...this.item,
      statistics: {
        ...this.item.statistics,
        commentCount: String(+this.item.statistics.commentCount + 1),
      },
    };
    this.comments.emit(result);
  }
}
