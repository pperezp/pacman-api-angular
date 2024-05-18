import { Component, Input } from '@angular/core';
import { Package } from '../../model/Package';

@Component({
    selector: 'app-native-package-by-name',
    standalone: true,
    imports: [],
    templateUrl: './native-package-by-name.component.html',
    styleUrl: './native-package-by-name.component.css'
})
export class NativePackageByNameComponent {
    @Input() package!: Package;
}
