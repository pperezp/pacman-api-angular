import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // TODO: añadi esto por que me salia un NullInjectError, pero no se que es

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideHttpClient()]
};
