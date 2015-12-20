# meanStackWeatherDemo
Scraping weather data from a website using the MEAN stack

No functionality added as of 20th Dec 2015 - Just generating the project.

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.1.1.

## Getting Started

### Prerequisites

You will need a few installations to get up and running. I use [chocolatey](https://chocolatey.org/) and [NPM](https://www.npmjs.com/ ) where available:

- [Git](https://git-scm.com/) (`choco install git.install`)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7 (`choco install nodejs.install`)
- [Bower](bower.io) (`npm install bower -g`)
- [Grunt](http://gruntjs.com/) (`npm install grunt-cli -g`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

MongoDB will also need to be added to the env PATH of your machine. For my machines I added the following directory to the PATH:

- C:\Program Files\MongoDB\Server\3.2\bin;

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
