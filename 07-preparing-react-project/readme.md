# Creating a React App

## Step 1
```
npm init
mkdir src public
```

## Step 2
```
touch public/index.html

<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>React Starter</title>
</head>

<body>
  <div id="root"></div>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
  <script src="../dist/bundle.js"></script>
</body>

</html>
```

## Step 3
Add babel support
```
npm install --save-dev @babel/core@7.1.0 @babel/cli@7.1.0 @babel/preset-env@7.1.0 @babel/preset-react@7.0.0
```

## Step 4
```
touch .babelrc

# add below contents in .babelrc
{
  "presets": ["@babel/env", "@babel/preset-react"]
}
```

## Step 5
Add Webpack support
```
npm install --save-dev webpack@4.19.1 webpack-cli@3.1.1 webpack-dev-server@3.1.8 style-loader@0.23.0 css-loader@1.0.0 babel-loader@8.0.2
```

## Step 6
Create Webpack config
```
touch webpack.config.js

# add below contents in webpack.config.js
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
```

## Step 7
Setup React and React DOM
```
npm install react@16.5.2 and react-dom@16.5.2
```

## Step 8
Create App.js
```
touch src/App.js

# add below contents in src/App.js
import React, { Component} from "react";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

export default App;
```

## Step 9
Create App.css
```
touch App.css

# add below contents in App.css
.App {
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}
```

## Step 10
Review final project structure
```
.
+-- public
| +-- index.html
+-- src
| +-- App.css
| +-- App.js
| +-- index.js
+-- .babelrc
+-- .gitignore
+-- package-lock.json
+-- package.json
+-- webpack.config.js
```

## Step 11
Add start script on package.json as shown below
```
....
"scripts": {
    "start": "webpack-dev-server --mode development"
  }
....
```

## Step 12
Run React App
```
npm start
```

## Step 13
Enable hot module reloading. 
```
npm install react-hot-loader@4.3.11
```

Edit App.js - import react-hot-loader in App.js and mark the exported object as hot-reloaded by modifying to code as follows
```
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

export default hot(module)(App);
```

## Step 14
- Restart App ```npm start```
- Make change in App.js file
- Browser automatically now load the changes

[Source](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)
