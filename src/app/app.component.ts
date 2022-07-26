import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeedbackAndChatComponent } from './feedback-and-chat/feedback-and-chat.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterModule,FeedbackAndChatComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'photo-gallery-app';
}
