import { Component, Input, OnInit, inject } from '@angular/core';
import { Package } from '../../model/Package';
import { ActivatedRoute } from '@angular/router';
import { NativePackagesService } from '../../services/native-packages.service';
import { Title } from "@angular/platform-browser";
import { ForeignPackagesService } from '../../services/foreign-packages.service';

@Component({
    selector: 'package-by-name',
    standalone: true,
    imports: [],
    templateUrl: './package-by-name.component.html',
    styleUrl: './package-by-name.component.css'
})
export class PackageByNameComponent implements OnInit {

    @Input() package!: Package;
    route = inject(ActivatedRoute);
    nativePackagesService = inject(NativePackagesService);
    foreignPackagesService = inject(ForeignPackagesService);
    title = inject(Title);
    packageType!: string;

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            let packageName = params.get('packageName') ?? '';
            this.packageType = params.get('packageType') ?? '';

            this.title.setTitle(packageName);

            if (this.packageType == 'native') {
                this.nativePackagesService.getPackageBy(packageName).subscribe({
                    next: (response) => {
                        this.package = response.package;
                    }
                });
            } else if (this.packageType == 'foreign') {
                this.foreignPackagesService.getPackageBy(packageName).subscribe({
                    next: (response) => {
                        this.package = response.package;
                    },
                    error: (e) => {
                        let httpCode = e.status;

                        if (httpCode == 404) {
                            console.log(e.error.message);
                            this.nativePackagesService.getPackageBy(packageName).subscribe({
                                next: (response) => {
                                    this.package = response.package;
                                }
                            });
                        }
                    }
                });
            }
        });
    }

    info(packageName: string) {
        if (packageName == "Nada") {
            return;
        }

        window.open(`/info/${this.packageType}/${packageName}`);
    }
}
