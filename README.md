# Consume an endpoint (http://localhost:8080/api/v1/native/packages/installed/explicit)

## Install and create project
```
sudo npm install -g @angular/cli
ng new pacman-api-angular
ng generate component native-package
```

## Package.ts (en native-package/model)
```
export interface Package {
    name: string;
    version: string;
    description: string;
}
```

## ApiResponse.ts (en native-package/model)
```
import { Package } from "./Package";

export interface ApiResponse {
    packages: Package[];
}
```

## native-package.component.ts

```
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
```

## native-package.component.html
```
<table border="1">
    <tr>
        <th>name</th>
        <th>version</th>
        <th>description</th>
    </tr>

    @for (package of packages; track package) {
        <tr>
            <td>{{ package.name }}</td>
            <td>{{ package.version }}</td>
            <td>{{ package.description }}</td>
        </tr>
    }
</table>
```

## app.component.html
```
<router-outlet />
```

## app.routes.ts
```
import { Routes } from '@angular/router';
import { NativePackageComponent } from './native-package/native-package.component';

export const routes: Routes = [
  { path: 'native/packs', component: NativePackageComponent }
];
```

## add HttpClientModule, CommonModule in app.component.ts
```
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pacman-api-angular';
}
```