import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

const routes = [
  {
    path: 'feedback-and-chat',
    loadComponent: () => 
      import('./app/feedback-and-chat/feedback-and-chat.component').then(c => c.FeedbackAndChatComponent),
  }
]


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes))]
}).catch(err => console.error(err));


