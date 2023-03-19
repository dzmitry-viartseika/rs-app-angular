import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './elements/input/input.component';
import { ButtonComponent } from './elements/button/button.component';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from './header/logo/logo.component';
import { SettingsButtonComponent } from './header/settings-button/settings-button.component';
import { VideoListComponent } from './video/video-list/video-list.component';
import { VideoItemComponent } from './video/video-item/video-item.component';
import { CounterLikeComponent } from './counters/counter-like/counter-like.component';
import { CounterDislikeComponent } from './counters/counter-dislike/counter-dislike.component';
import { CounterViewsComponent } from './counters/counter-views/counter-views.component';
import { CounterCommentsComponent } from './counters/counter-comments/counter-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    ButtonComponent,
    LogoComponent,
    SettingsButtonComponent,
    VideoListComponent,
    CounterDislikeComponent,
    VideoItemComponent,
    CounterLikeComponent,
    CounterViewsComponent,
    CounterCommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
