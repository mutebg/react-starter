# REACT STARTER KIT
- WebPack
- ES2015/16
- Enzyme + Jasmine as test suite
- ESlint


**Install**  
`npm install`

**Run dev server with webpack**:  
`npm run start`

**Build with webpack**:  
`npm run build`

**Run tests**:  
`npm test`
single run with phantomjs  
`npm run test:watch` watching with chrome browser


#### TODO:
- redux / flux
- immutablejs
- components folder organization
- scss folder organization ( also add postcss ? )
- staging configuration ( production / development )
- tools, debuging, linting
- assets (images/icons/svg)
- server side rendering
- service worker ( offline use )
- run in web worker


##### STYLE GUIDE:
- REACT STYLE GUIDE: https://github.com/airbnb/javascript/tree/master/react
- BEM STYLE GUIDE: http://getbem.com/introduction/

##### DOCS:
###### How to organize files:
- each components has own folder
    - each folder contain js, scss and test file related to component
    - scss file contain only style related to component
- actions
- stores


###### How to write CSS:
- Use BEM methodology
- Every component has own css/scss file


###### How to write Components:
- Use ES6 classes
- Each file contain only 1 component


###### How to write tests:
- Test libs:
    - Enzyme https://github.com/airbnb/enzyme/
    - Jasmine http://jasmine.github.io/2.4/introduction.html
    - Karma https://github.com/karma-runner/karma
- Place test file in component directory with suffix _test.js
