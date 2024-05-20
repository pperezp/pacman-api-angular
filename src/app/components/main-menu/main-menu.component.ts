import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Package } from '../../model/Package';
import { NativePackagesService } from '../../services/native-packages.service';
import { ExplicitInstalledPackagesLiteComponent } from '../explicit-installed-packages-lite/explicit-installed-packages-lite.component';
import { PackagesToUpgrade } from '../../model/PackagesToUpgrade';
import { PackagesToUpgradeComponent } from '../packages-to-upgrade/packages-to-upgrade.component';
import { PackageByNameComponent } from '../package-by-name/package-by-name.component';
import { ForeignPackagesService } from '../../services/foreign-packages.service';
import { ExplicitInstalledPackagesComponent } from '../explicit-installed-packages/explicit-installed-packages.component';

@Component({
    selector: 'app-main-menu',
    standalone: true,
    imports: [
        HttpClientModule, 
        ExplicitInstalledPackagesComponent,
        ExplicitInstalledPackagesLiteComponent, 
        PackagesToUpgradeComponent,
        PackageByNameComponent
    ],
    templateUrl: './main-menu.component.html',
    styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

    packages!: Package[];
    total!: number;
    nativePackagesService = inject(NativePackagesService);
    foreignPackagesService = inject(ForeignPackagesService);
    router = inject(Router);
    renderView!: string;
    packagesToUpgrade!: PackagesToUpgrade[];
    errorMessage!: string;
    package!: Package;
    packageType!: string;

    getNativeInstalledPackages() {
        this.packageType = "native";
        this.nativePackagesService.getExplicitInstalledPackages().subscribe(
            response => {
                this.packages = response.packages;
                this.total = this.packages.length;
                this.renderView = "nativePackages";
            }
        );
    }

    getExplicitInstalledPackagesLite() {
        this.packageType = "native";
        this.nativePackagesService.getExplicitInstalledPackagesLite().subscribe(
            response => {
                this.packages = response.packages;
                this.total = this.packages.length;
                this.renderView = "nativePackagesLite";
            }
        );
    }

    getPackagesToUpgrade() {
        this.packageType = "native";
        let rootPassword = prompt("Root password") ?? '';

        if (!rootPassword) {
            return;
        }

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
        this.packageType = "native";
        let packageName = prompt("Package name") ?? '';

        if (!packageName) {
            return;
        }

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

    getForeignInstalledPackages() {
        this.packageType = "foreign";
        this.foreignPackagesService.getExplicitInstalledPackages().subscribe(
            response => {
                this.packages = response.packages;
                this.total = this.packages.length;
                this.renderView = "nativePackages";
            }
        );
    }

    getForeignExplicitInstalledPackagesLite() {
        this.packageType = "foreign";
        this.foreignPackagesService.getExplicitInstalledPackagesLite().subscribe(
            response => {
                this.packages = response.packages;
                this.total = this.packages.length;
                this.renderView = "nativePackagesLite";
            }
        );
    }

    getForeignPackagesToUpgrade() {
        this.packageType = "foreign";
        let rootPassword = prompt("Root password") ?? '';

        if (!rootPassword) {
            return;
        }

        this.foreignPackagesService.getPackagesToUpgrade(rootPassword).subscribe({
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

    getForeignPackageByName() {
        this.packageType = "foreign";
        let packageName = prompt("Package name") ?? '';

        if (!packageName) {
            return;
        }

        this.foreignPackagesService.getPackageBy(packageName).subscribe({
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
