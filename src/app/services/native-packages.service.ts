import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/ApiResponse';

@Injectable({
    providedIn: 'root'
})
export class NativePackagesService {

    private apiUrl = 'http://localhost:8080/api/v1/native/packages/installed/explicit';

    constructor(private http: HttpClient) { }

    getExplicitInstalledPackages(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.apiUrl);
    }
}
