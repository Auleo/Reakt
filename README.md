# Przed rozpoczęciem nauki z reacta powinno się zapoznać z zagadnieniami z HTML,CSS,JS takimi jak:
- arrow function - ()=>{}
- curring - ()=>()=>{}
- class / constuctor / method / property
- types - object / array / string / number
- event handler - onclick, onchange, onkeydown
- DOM - document object model
- tags, attributes - src/class/href
- deconstructing objects / arrays = {...a, b, ...c}, [...a,...b]
- callbacks / promises / async + await
- ajax / fetch
- API / request / response / body / headers / status codes (200,401,403,404,500) / methods GET/POST
- CSS preprocessor LESS/SASS
- import / export / modules


---
# Instalacja środowiska Reacta
### 1. terminal => conemu dla windows, defaultowe dla mac/linux
### 2. node => https://nodejs.org/en/
### 3. npm => npm instaluje się razem z node
### 4. yarn => `npm install -g yarn`
> yarn to narzędze do instalacji paczek node
### 5. react-scripts => `yarn global add react-scripts`
> react-script to narzędze do pracy z reactem
### 6. create-react-app => `yarn global add create-react-app`
> create-react-app to narzędze do tworzenia projektów reacta
### 7. serve => `yarn global add serve`
> serve to narzędzie do testowania zbudowanych aplikacji reacta


---
# Odpalanie apki Reacta
> aby wystartować apkę do pracy
#### 1. `yarn start`
#### 2. apka zostanie wystawiona na localhost:3000 w przeglądarce


---
# Zbudowanie apki Reacta
> aby zbudować apkę pod deployment
#### 1. `yarn build`
#### 2. `serve -s build`
#### 3. zbudowana zostanie wystawiona na localhost:5000 w przeglądarce
