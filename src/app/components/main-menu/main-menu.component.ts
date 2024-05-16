import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NativeInstalledPackagesExplicitComponent } from '../native-installed-packages-explicit/native-installed-packages-explicit.component';
import { Package } from '../../model/Package';
import { NativePackagesService } from '../../services/native-packages.service';
import { NativeInstalledPackagesExplicitLiteComponent } from '../native-installed-packages-explicit-lite/native-installed-packages-explicit-lite.component';

@Component({
    selector: 'app-main-menu',
    standalone: true,
    imports: [HttpClientModule, NativeInstalledPackagesExplicitComponent, NativeInstalledPackagesExplicitLiteComponent],
    templateUrl: './main-menu.component.html',
    styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

    explicitInstalledPackages!: Package[];
    explicitInstalledPackagesLite!: Package[];
    totalPackages!: number;
    nativePackagesService = inject(NativePackagesService)
    router = inject(Router)

    getNativeInstalledPackages() {
        this.nativePackagesService.getExplicitInstalledPackages().subscribe(
            response => {
                this.explicitInstalledPackages = response.packages;
                this.totalPackages = this.explicitInstalledPackages.length;
            }
        );
    }

    getExplicitInstalledPackagesLite() {
        this.nativePackagesService.getExplicitInstalledPackagesLite().subscribe(
            response => {
                this.explicitInstalledPackagesLite = response.packages;
                this.totalPackages = this.explicitInstalledPackagesLite.length;
                console.log(response.packages);
            }
        );
    }
}
