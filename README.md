# Webpack 5 Module Federation

This example demos a basic host application loading remote component.

- `app1` is the host application.
- `app2` standalone application which exposes `Button` component, that is consumed by `app1`

# Running Demo

Run `yarn start`. This will build and serve both `app1` and `app2` on ports 3001 and 3002 respectively.

- [localhost:3001](http://localhost:3001/)/[https://webpack5-md-fed-app1.netlify.app/](https://webpack5-md-fed-app1.netlify.app/)) (HOST)
- [localhost:3002](http://localhost:3002/)/[https://webpack5-md-fed-app2.netlify.app/](https://webpack5-md-fed-app2.netlify.app/)) (STANDALONE REMOTE)


