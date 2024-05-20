import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetPackagesToUpgradeResponse } from '../model/GetPackagesToUpgradeResponse';
import { GetPackageByNameResponse } from '../model/GetPackageByNameResponse';
import { GetPackagesResponse } from '../model/GetPackagesResponse';
import { ForeignPackagesApiUrl } from '../config/ForeignPackagesApiUrl';

@Injectable({
    providedIn: 'root'
})
export class ForeignPackagesService {

    http = inject(HttpClient);

    getExplicitInstalledPackages(): Observable<GetPackagesResponse> {
        return this.http.get<GetPackagesResponse>(ForeignPackagesApiUrl.GET_EXPLICIT_INSTALLED_PACKAGES_API_URL);
    }

    getExplicitInstalledPackagesLite(): Observable<GetPackagesResponse> {
        return this.http.get<GetPackagesResponse>(ForeignPackagesApiUrl.GET_EXPLICIT_INSTALLED_PACKAGES_LITE_API_URL);
    }

    getPackagesToUpgrade(rootPassword: string): Observable<GetPackagesToUpgradeResponse> {
        return this.http.get<GetPackagesToUpgradeResponse>(ForeignPackagesApiUrl.GET_PACKAGES_TO_UPGRADE_API_URL + rootPassword);
    }

    getPackageBy(name: string): Observable<GetPackageByNameResponse> {
        return this.http.get<GetPackageByNameResponse>(ForeignPackagesApiUrl.GET_PACKAGE_BY_NAME_API_URL + name);
    }
}
