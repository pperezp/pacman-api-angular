import { Routes } from '@angular/router';
import { NativePackageByNameComponent } from './components/native-package-by-name/native-package-by-name.component';

export const routes: Routes = [
    { path: 'info/:packageType/:packageName', component: NativePackageByNameComponent }
];
