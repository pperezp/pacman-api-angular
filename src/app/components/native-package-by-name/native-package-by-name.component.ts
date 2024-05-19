import { Component, Input, OnInit, inject } from '@angular/core';
import { Package } from '../../model/Package';
import { ActivatedRoute } from '@angular/router';
import { NativePackagesService } from '../../services/native-packages.service';

@Component({
    selector: 'app-native-package-by-name',
    standalone: true,
    imports: [],
    templateUrl: './native-package-by-name.component.html',
    styleUrl: './native-package-by-name.component.css'
})
export class NativePackageByNameComponent implements OnInit {

    @Input() package!: Package;
    route = inject(ActivatedRoute);
    nativePackagesService = inject(NativePackagesService);

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            let packageName = params.get('packageName') ?? '';

            this.nativePackagesService.getPackageBy(packageName).subscribe({
                next: (response) => {
                    this.package = response.package;
                }
            });
        });
    }
}
