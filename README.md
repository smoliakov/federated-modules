# Webpack 5 Module Federation

For more info visit [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/#components-library-as-container).

## How to run

- `git clone git@github.com:smoliakov/federated-modules.git`
- `cd ./application-a && npm i`
- `cd ../application-b && npm i`
- `cd ../application-a && npm run dev`
- `cd ../application-b && npm run dev`

Visit http://localhost:3001 and http://localhost:3002.

## What happened

Application A is sharing component `SayHelloFromA` and Application B is sharing component `SayHelloFromB`.  
Both apps consume and exposes each other components.  
Sweet.
