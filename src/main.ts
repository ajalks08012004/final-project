import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app'; // app.ts is your root component
import { appConfig } from './app/app.config';

bootstrapApplication(App, appConfig)
  .catch(err => console.error(err));
