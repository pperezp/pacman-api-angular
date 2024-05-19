import { Component, Input } from '@angular/core';
import { Package } from '../../model/Package';

@Component({
    selector: 'app-native-installed-packages-explicit',
    standalone: true,
    imports: [],
    templateUrl: './native-installed-packages-explicit.component.html',
    styleUrl: './native-installed-packages-explicit.component.css'
})
export class NativeInstalledPackagesExplicitComponent {

    @Input() packages!: Package[];
    @Input() total!: number;

    info(packageName: string) {
        if (packageName == "Nada") {
            return;
        }

        window.open(`/info/${packageName}`, '_blank');
    }
}
