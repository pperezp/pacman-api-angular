import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/ApiResponse';

@Injectable({
    providedIn: 'root'
})
export class NativePackagesService {

    private GET_EXPLICIT_INSTALLED_PACKAGES_API_URL = 'http://localhost:8080/api/v1/native/packages/installed/explicit';
    private GET_EXPLICIT_INSTALLED_PACKAGES_LITE_API_URL = "http://localhost:8080/api/v1/native/packages/installed/explicit/lite";

    constructor(private http: HttpClient) { }

    getExplicitInstalledPackages(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.GET_EXPLICIT_INSTALLED_PACKAGES_API_URL);
    }

    getExplicitInstalledPackagesLite(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.GET_EXPLICIT_INSTALLED_PACKAGES_LITE_API_URL);
    }
}
