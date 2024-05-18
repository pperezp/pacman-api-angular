import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GetPackagesToUpgradeResponse } from '../model/GetPackagesToUpgradeResponse';
import { GetPackageByNameResponse } from '../model/GetPackageByNameResponse';
import { GetPackagesResponse } from '../model/GetPackagesResponse';

@Injectable({
    providedIn: 'root'
})
export class NativePackagesService {

    private SERVER = environment.SERVER_IP;
    private PORT = environment.SERVER_PORT;

    private GET_EXPLICIT_INSTALLED_PACKAGES_API_URL = 'http://localhost:8080/api/v1/native/packages/installed/explicit';
    private GET_EXPLICIT_INSTALLED_PACKAGES_LITE_API_URL = "http://localhost:8080/api/v1/native/packages/installed/explicit/lite";
    private GET_PACKAGES_TO_UPGRADE_API_URL = "http://localhost:8080/api/v1/native/packages/upgrade?password=";
    private GET_PACKAGE_BY_NAME_API_URL = "http://localhost:8080/api/v1/native/packages/";

    constructor(private http: HttpClient) { }

    getExplicitInstalledPackages(): Observable<GetPackagesResponse> {
        return this.http.get<GetPackagesResponse>(this.GET_EXPLICIT_INSTALLED_PACKAGES_API_URL);
    }

    getExplicitInstalledPackagesLite(): Observable<GetPackagesResponse> {
        return this.http.get<GetPackagesResponse>(this.GET_EXPLICIT_INSTALLED_PACKAGES_LITE_API_URL);
    }

    getPackagesToUpgrade(rootPassword: string): Observable<GetPackagesToUpgradeResponse> {
        return this.http.get<GetPackagesToUpgradeResponse>(this.GET_PACKAGES_TO_UPGRADE_API_URL + rootPassword);
    }

    getPackageBy(name: string): Observable<GetPackageByNameResponse> {
        return this.http.get<GetPackageByNameResponse>(this.GET_PACKAGE_BY_NAME_API_URL + name);
    }
}
