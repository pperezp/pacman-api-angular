import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/ApiResponse';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class NativePackagesService {

    private SERVER = environment.SERVER_IP;
    private PORT = environment.SERVER_PORT;

    private GET_EXPLICIT_INSTALLED_PACKAGES_API_URL = 'http://localhost:8080/api/v1/native/packages/installed/explicit';
    private GET_EXPLICIT_INSTALLED_PACKAGES_LITE_API_URL = "http://localhost:8080/api/v1/native/packages/installed/explicit/lite";

    constructor(private http: HttpClient) { }

    getExplicitInstalledPackages(): Observable<ApiResponse> {
        console.log(this.SERVER);
        console.log(this.PORT);
        return this.http.get<ApiResponse>(this.GET_EXPLICIT_INSTALLED_PACKAGES_API_URL);
    }

    getExplicitInstalledPackagesLite(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.GET_EXPLICIT_INSTALLED_PACKAGES_LITE_API_URL);
    }
}
