import { Routes } from '@angular/router';
import { PackageByNameComponent } from './components/package-by-name/package-by-name.component';

export const routes: Routes = [
    { path: 'info/:packageType/:packageName', component: PackageByNameComponent }
];
