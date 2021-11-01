# webpack4-react
My template for creating a website with react and webpack 4.

Needed webpack 4 because rust webassembly doesn't have support for webpack 5 yet.


## How to use it

 - Install dependencies

'''

npm i

'''

 - Start a hot instance with hot reload. Won't show favicon.

'''

npm start

'''

 - Package everything for production in 'dist' folder. Will show favicon. To prove it, open dist folder and run "python3 -m http.server 9000". Then open "localhost:9000".

'''

npm build

'''
