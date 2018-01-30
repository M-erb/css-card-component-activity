# CSS Card Component Activity

## Utilizes
* Gulp for sass compiling
* http-server for viewing a live preview

## Info

 All examples use the same level of markup with the exception of an addisional class name on the parent elements to give additional behavoir. Component sass is located in "/assets/css/scss/_card-component.scss" for easy viewing and maintainance.

## How to build

You must have [node.js](https://nodejs.org/en/) version 8 or above and npm 5 or above to build the project.

You can check by opening a console and running

```
node -v

// 8.9.4
```
and 
```
npm -v

// 5.6.0
```

### 1 Clone the project
```
git clone https://github.com/M-erb/css-card-component-activity.git
```

### 2 Install local modules
```
npm install
```

### 3 Compile CSS
```
npm run-script prod
```
or for gulp to keep watching for changes
```
npm run-script dev
```

### 4 Create live static file server
```
npm run-script server
```
Then goto http://localhost:3000
