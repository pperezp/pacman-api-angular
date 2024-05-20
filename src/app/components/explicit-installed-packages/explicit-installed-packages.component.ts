import { Component, Input } from '@angular/core';
import { Package } from '../../model/Package';

@Component({
    selector: 'explicit-installed-packages',
    standalone: true,
    imports: [],
    templateUrl: './explicit-installed-packages.component.html',
    styleUrl: './explicit-installed-packages.component.css'
})
export class ExplicitInstalledPackagesComponent {

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
