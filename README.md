# **Snippod-Starter-Demo-App-Front**

## Overview

[**Snippod-Starter-Demo-App-Front**](https://github.com/shalomeir/snippod-starter-demo-app-front) is a **front part** of snippod-starter demo application. A [**Snippod-Starter-Demo-App**](https://github.com/shalomeir/snippod-starter-demo-app) is a 'Full Stack Single Page Application' for the starter who want to be a web application developer.
This repository code is based on [React](http://facebook.github.io/react/) and [Redux](https://github.com/gaearon/redux).

![Alt Stack Diagram](https://raw.githubusercontent.com/shalomeir/snippod-starter-demo-app-front/master/SnippodStarterDemoAppFrontArchitecture.png "Stack Diagram")

## Base Repository, Module
  
We made this using these technologies.

* [React](http://facebook.github.io/react/)
* [Redux](https://github.com/gaearon/redux)
* [normalizr](https://github.com/paularmstrong/normalizr)
* [Redux Form](http://redux-form.com/)
* [Semantic UI](http://semantic-ui.com/)
* [Radium](https://github.com/FormidableLabs/radium)
* [React Router](https://github.com/reactjs/react-router) and [react-router-redux](https://github.com/reactjs/react-router-redux)
* [React Intl](https://github.com/yahoo/react-intl)
* [SuperAgent](https://visionmedia.github.io/superagent/)
* [Webpack](https://webpack.github.io/)
* [Node.js](https://nodejs.org/en/)
* [Express](http://expressjs.com/)


## Getting Started
Preliminaries :
* npm v2.15.5 or higher
* Node v6.11.1 - We highly recommend [Node Version Manager (NVM)](https://github.com/creationix/nvm)

You have to git clone this repository.
```
git clone https://github.com/shalomeir/snippod-starter-demo-app-front
```

## Installation

```
npm install
npm run build:semantic
```

After node packages are installed, automatically build a semantic ui for styling and bundling by webpack. A module bundling by webpack process is a little time consuming task (about 60 sec).

## Running Dev Server

#### Dev local node server interacted with public shared REST API server hosted by [Snippod Inc.](https://www.snippod.com).
```
npm run dev
```

#### Dev local node server interacted with localhost REST API server ['snippod-starter-demo-app-server'](https://github.com/shalomeir/snippod-starter-demo-app-server) which should be run first in your computer.
```
npm run dev-local
```

Whatever you execute a development server, first executing time is a little time consuming task. (about 40sec)
After then, [react-hot-loader](https://github.com/gaearon/react-hot-loader) and [redux-devtools](https://github.com/gaearon/redux-devtools) are executed with a development server. So you can easily fix and debug a code. You don't needed to reboot a server for development. 


## Building and Running Production Server

```
npm run build
npm run start
```

## Description
Almost main javascript source are located [**'./src'** directory](https://github.com/shalomeir/snippod-boilerplate/tree/master/snippod_webapp/client/scripts).
Also customized theme semantic ui source are located [**'./semantic/src/site'** directory](https://github.com/shalomeir/snippod-boilerplate/tree/master/snippod_webapp/client/scripts). All semantic ui code are merged by webpack. 
At some point, [Inline Styles](docs/InlineStyles.md) is injected by [Radium](https://github.com/FormidableLabs/radium).
What initially gets run by [Express](http://expressjs.com/) is `bin/server.js`, which does little more than enable ES6 and ES7 awesomeness in the server-side node code. It then initiates `server.js`.
We'd like to apply node server for react server-side rendering, but didn't make perfectly yet.
A front side ajax call usually doing in Actions. We use [Ducks](https://github.com/erikras/ducks-modular-redux) for handling actionTypes and actions, reducer.
Almost front source architecture is based on ['React Redux Universal Hot Example'](https://github.com/erikras/react-redux-universal-hot-example).

If you want to follow step by step, go to a [**codelab**](https://github.com/shalomeir/snippod-starter-demo-app-front/tree/codelab) branch of this repository.

More information is available at [**this blog post**](http://www.shalomeir.com/2016/07/snippod-starter-demo-app-full-stack-react-redux-django/) written in **Korean**.



## FAQ (from 'react-redux-universal-hot-example')

#### Help! It doesn't work on Windows! What do I do?

Fear not. [chtefi](https://github.com/chtefi) has figured out [what needs to be changed](https://github.com/erikras/react-redux-universal-hot-example/pull/21/files) to make it work on Windows 8.

#### How do I disable the dev tools?

They will only show in development, but if you want to disable them even there, set `__DEVTOOLS__` to `false` in `/webpack/dev.config.js`.


## Reference

- [React Redux Universal Hot Example](https://github.com/erikras/react-redux-universal-hot-example)
- [Redux Real-World Example](https://github.com/rackt/redux/tree/master/examples/real-world)
- [React-News](https://github.com/echenley/react-news)

## Contributing

Contributions, questions and comments are all welcome and encouraged.

## License
[MIT License](http://opensource.org/licenses/MIT).

Copyright 2018 [Snippod Inc.](https://www.snippod.com/)
