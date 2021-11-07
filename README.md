# My Portifolio Webpage

Still in development. This is a portifolio webpage that has an introduction about me, has a navigation bar on top and a background with animated canvas.

Tools used are nodejs, react compiled through babel, threejs. All packaged with webpack. At late stages will include webassembly using wasm-pack and rust.


## How to use it

 - npm i: Install dependencies.

 - npm run build: Package everything for production in 'docs' folder.

 - npm run start: Start a webdev instance with hot reload.


## Directory Structure

Starting with the root folder.

 - docs: Webpack will pack the files in this folder. Github pages use this folder for the on0n0k1.github.io webpage.
 - public: Template used for the initial html page. Has 3d models, textures, a react favicon to show the main framework used, and the 'index.html' file.
 - src: webpack entry is 'index.js'. Coded in react and plain javascript.
 - '.babelrc': config for the babel loader. We need it to transpile es6 react into browser readable javascript.
 - 'LICENSE': MIT License. Have fun.
 - 'package.json': nodejs dependencies and scripts for running.
 - 'README.md': Hello!
 - 'webpack.config.js': Webpack configuration file.
 
 
### Src Directory

 - components: components used in react.
 - styles: 'index.css' has the css for the starting template. 'zindexes.css' has the 'z-index' attribute for each element in the entire page. It's a good way to make sure that everything is layered up correctly.
 - 'index.js': calls React main component and place it in '#root" div of the template.

### Components Directory