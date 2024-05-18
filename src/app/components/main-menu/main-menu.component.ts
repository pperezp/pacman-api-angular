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

    packages!: Package[];
    total!: number;
    nativePackagesService = inject(NativePackagesService);
    router = inject(Router);
    renderView!: string;

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
}
