// Código en src/main.ts

// CAMBIA ESTO (si lo ves):
// import { App } from './app/app';

// A ESTO:
import { AppComponent } from './app/app.component'; // Asegúrate que importa desde el archivo .component.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));