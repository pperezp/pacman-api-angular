import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NativeInstalledPackagesExplicitComponent } from '../native-installed-packages-explicit/native-installed-packages-explicit.component';
import { Package } from '../../model/Package';
import { NativePackagesService } from '../../services/native-packages.service';
import { NativeInstalledPackagesExplicitLiteComponent } from '../native-installed-packages-explicit-lite/native-installed-packages-explicit-lite.component';
import { PackagesToUpgrade } from '../../model/PackagesToUpgrade';
import { NativePackagesToUpgradeComponent } from '../native-packages-to-upgrade/native-packages-to-upgrade.component';
import { NativePackageByNameComponent } from '../native-package-by-name/native-package-by-name.component';

@Component({
    selector: 'app-main-menu',
    standalone: true,
    imports: [HttpClientModule, NativeInstalledPackagesExplicitComponent,
        NativeInstalledPackagesExplicitLiteComponent, NativePackagesToUpgradeComponent,
        NativePackageByNameComponent],
    templateUrl: './main-menu.component.html',
    styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

    packages!: Package[];
    total!: number;
    nativePackagesService = inject(NativePackagesService);
    router = inject(Router);
    renderView!: string;
    packagesToUpgrade!: PackagesToUpgrade[];
    errorMessage!: string;
    package!: Package;

    getNativeInstalledPackages() {
        this.nativePackagesService.getExplicitInstalledPackages().subscribe(
            response => {
                this.packages = response.packages;
                this.total = this.packages.length;
                this.renderView = "nativePackages";
            }
        );
    }

    getExplicitInstalledPackagesLite() {
        this.nativePackagesService.getExplicitInstalledPackagesLite().subscribe(
            response => {
                this.packages = response.packages;
                this.total = this.packages.length;
                this.renderView = "nativePackagesLite";
            }
        );
    }

    getPackagesToUpgrade() {
        let rootPassword = prompt("Root password") ?? '';

        this.nativePackagesService.getPackagesToUpgrade(rootPassword).subscribe({
            next: (response) => {
                this.packagesToUpgrade = response.packages;
                this.total = this.packagesToUpgrade.length;
                this.renderView = "packagesToUpgrade";
            },
            error: (e) => {
                this.renderView = "errorView";
                let httpCode = e.status;

                switch (httpCode) {
                    case 400:
                        this.errorMessage = e.error.message;
                        break;

                    case 204:
                        this.errorMessage = "No packages to upgrade";
                        break;
                }
            }
        });
    }

    getPackageByName() {
        let packageName = prompt("Package name") ?? '';

        this.nativePackagesService.getPackageBy(packageName).subscribe({
            next: (response) => {
                this.renderView = "packageByName";
                this.package = response.package;
            },
            error: (e) => {
                this.renderView = "errorView";
                let httpCode = e.status;

                if (httpCode == 404) {
                    this.errorMessage = e.error.message;
                }
            }
        });
    }
}
