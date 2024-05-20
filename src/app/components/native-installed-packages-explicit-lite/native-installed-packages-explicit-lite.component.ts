import { Component, Input } from '@angular/core';
import { Package } from '../../model/Package';

@Component({
    selector: 'app-native-installed-packages-explicit-lite',
    standalone: true,
    imports: [],
    templateUrl: './native-installed-packages-explicit-lite.component.html',
    styleUrl: './native-installed-packages-explicit-lite.component.css'
})
export class NativeInstalledPackagesExplicitLiteComponent {

    @Input() packages!: Package[];
    @Input() total!: number;
    @Input() packageType!: string;

    info(packageName: string) {
        if (packageName == "Nada") {
            return;
        }
        
        window.open(`/info/${this.packageType}/${packageName}`, '_blank');
    }
}
