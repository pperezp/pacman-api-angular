import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Package } from './model/Package';
import { ApiResponse } from './model/ApiResponse';

@Component({
  selector: 'app-native-package',
  templateUrl: './native-package.component.html',
  styleUrls: ['./native-package.component.css']
})
export class NativePackageComponent {

  packages: Package[] = []

  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    this.http.get<ApiResponse>('http://localhost:8080/api/v1/native/packages/installed/explicit').subscribe(data => {
      this.packages = data.packages;
    });
  }
}
