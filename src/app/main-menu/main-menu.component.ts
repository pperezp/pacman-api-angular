import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NativePackagesService } from '../services/native-packages.service';
import { Package } from '../model/Package';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-main-menu',
    standalone: true,
    imports: [HttpClientModule],
    templateUrl: './main-menu.component.html',
    styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

    explicitInstalledPackages: Package[];
    totalPackages: number;

    constructor(
        private router: Router,
        private nativePackagesService: NativePackagesService
    ) {
        // TODO: es necesario inicializar todos los atributos?
        this.totalPackages = 0;
        this.explicitInstalledPackages = []
    }

    getNativeInstalledPackages() {
        this.nativePackagesService.getExplicitInstalledPackages().subscribe(
            data => {
                this.explicitInstalledPackages = data.packages; // no entiendo donde puedo dibujar esto
                this.totalPackages = this.explicitInstalledPackages.length;
            }
        );
    }
}
