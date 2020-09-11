# Webpack 5 Module Federation

For more info visit [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/#components-library-as-container).

## How to run

- `git clone git@github.com:smoliakov/federated-modules.git`
- run `npm i` in every app  
- run `npm run dev` in every app

## What`s happening

### Simple bi-directional
Application A is sharing component `SayHelloFromA` and Application B is sharing component `SayHelloFromB`.  
Both apps consume and expose each other components.  

### One host
Application Host is consuming Application A and Application B components.

## Guides

[Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)

[Module Federation. Advanced API in Webpack 5.0.0-beta.17](https://medium.com/dev-genius/module-federation-advanced-api-inwebpack-5-0-0-beta-17-71cd4d42e534) by [Zack Jackson](https://medium.com/@ScriptedAlchemy)

[Migrating Module Federation from Webpack 5.0.0-beta.16 to Webpack 5.0.0-beta.21](https://medium.com/@JayKariesch/migrating-module-federation-from-webpack-5-0-0-beta-16-to-webpack-5-0-0-beta-21-16ee1d1ef5a8) by [Jay Kariesch](https://medium.com/@JayKariesch)
