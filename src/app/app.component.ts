import { Component } from '@angular/core';
import responseData from './constants/response';
import IPost from './models/IPost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public list: IPost[] = responseData && responseData.items;

  public searchText = '';

  onSortingByDate() {
    const result = this.list.sort((a: IPost, b: IPost): number => {
      if (a.snippet!.publishedAt < b.snippet!.publishedAt) {
        return 1;
      } else {
        return -1
      }
    });
    this.list = result;
  }

  onSortingByViews() {
    const result = this.list.sort((a: IPost, b: IPost): number => {
      if (+b.statistics.viewCount > +a.statistics.viewCount) {
        return -1;
      } else {
        return 1;
      }
    });
    this.list = result;
  }

  onLike(post: IPost) {
    const currentPost = this.list.find((item) => post.id === item.id);
    if (currentPost) {
      const result = +currentPost.statistics.likeCount + 1;
      currentPost.statistics.likeCount = String(result);
    }
  }

  onDislike(post: IPost) {
    const currentPost = this.list.find((item) => post.id === item.id);
    if (currentPost) {
      const result = +currentPost.statistics.dislikeCount + 1;
      currentPost.statistics.dislikeCount = String(result);
    }
  }

  onViews(post: IPost) {
    const currentPost = this.list.find((item) => post.id === item.id);
    if (currentPost) {
      const result = +currentPost.statistics.viewCount + 1;
      currentPost.statistics.viewCount = String(result);
    }
  }

  onComments(post: IPost) {
    const currentPost = this.list.find((item) => post.id === item.id);
    if (currentPost) {
      const result = +currentPost.statistics.commentCount + 1;
      currentPost.statistics.commentCount = String(result);
    }
  }

  onSearch() {
    console.log('searchText', this.searchText);
  }
}
