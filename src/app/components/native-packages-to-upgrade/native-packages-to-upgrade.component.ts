import { Component, Input } from '@angular/core';
import { PackagesToUpgrade } from '../../model/PackagesToUpgrade';

@Component({
    selector: 'app-native-packages-to-upgrade',
    standalone: true,
    imports: [],
    templateUrl: './native-packages-to-upgrade.component.html',
    styleUrl: './native-packages-to-upgrade.component.css'
})
export class NativePackagesToUpgradeComponent {

    @Input() packages!: PackagesToUpgrade[];
    @Input() total!: number;
    @Input() packageType!: string;

    info(packageName: string) {
        if (packageName == "Nada") {
            return;
        }
        
        window.open(`/info/${this.packageType}/${packageName}`, '_blank');
    }
}
