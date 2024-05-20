import { Component, Input } from '@angular/core';
import { PackagesToUpgrade } from '../../model/PackagesToUpgrade';

@Component({
    selector: 'packages-to-upgrade',
    standalone: true,
    imports: [],
    templateUrl: './packages-to-upgrade.component.html',
    styleUrl: './packages-to-upgrade.component.css'
})
export class PackagesToUpgradeComponent {

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
