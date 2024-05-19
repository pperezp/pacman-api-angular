# Consume an endpoint (http://localhost:8080/api/v1/native/packages/installed/explicit)

## Install and create project
```
sudo npm install -g @angular/cli
ng new pacman-api-angular
ng generate component native-package
```

## Install bootstrap
```
npm install bootstrap @popperjs/core
```

### angular.json (build)
```
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```