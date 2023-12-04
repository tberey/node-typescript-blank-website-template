<!-- PROJECT LOGO & TITLE -->
<br>
<div align="center">
  <img src="public/assets/images/img.png" alt="Logo" width="73" height="70">
  <br><br>
  <div align="center"><h1>AnyWesbite</h1>A Blank Website Template,<br>to start something new in TypeScript and Node.</div>
  <div align="right">
    <br>
    <a href="https://github.com/tberey/node-typescript-blank-website-template/blob/master/README.md"><strong>Documentation »</strong></a>
    <br>
    <a href="#usage">Demo</a>
    ·
    <a href="https://github.com/tberey/node-typescript-blank-website-template/issues">Report</a>
    ·
    <a href="https://github.com/tberey/node-typescript-blank-website-template/issues">Request</a>
  </div>
</div>



<!-- TABLE OF CONTENTS -->
<details open="open" style="padding:4px;display:inline;border-width:1px;border-style:solid;">
  <summary><b style="display: inline-block"><u>Contents</u></b></summary>
    <ol>
        <li>
        <a href="#about-this-project">About</a>
        <ul>
            <li><a href="#tech-stack">Tech Stack</a></li>
        </ul>
        </li>
        <li>
        <a href="#get-started">Get Started</a>
        <ul>
            <li><a href="#prerequisites">Prerequisites</a></li>
            <li><a href="#installation">Installation</a></li>
        </ul>
        </li>
        <li>
          <a href="#usage">Usage</a>
          <ul>
            <li><a href="#screenshots">Screenshots</a></li>
        </ul>
        </li>
        <li><a href="#setup-instructions">Full Setup Instructions</a></li>
        <li><a href="#changelog">Changelog</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#acknowledgements">Acknowledgements</a></li>
    </ol>
</details><hr><br>



<!-- ABOUT THis PROJECT -->
## About This Project
A fresh blank Node server, written in TypeScript, that is setup and ready to go with the required dependencies and infrastructure already setup for your convenience, to create any full stack wesbite. Can be started right out of the box, to immediately begin devlopment hassle free with clear concise logging, with no configuation or setup time needed. Also includes a ready-to-go front end, that uses a simple but robust grid system that is highly customizable and dynamic, scaling to all devices or screen sizes. Index test page already setup with the basic amenities like a menu, header and footer included. This template is set up and intended for TypeScript, making use of strict typesetting, precompiling, and presented in an object-oriented approach.

*This template is completely unrestricted, and free for anyone to use, unlimited, with no credit or acknowledgements needed. There are no signs of any ownership, or personal data, in this codebase. See the LICENSE file for more info.*

<br>

### Tech Stack
* [Typescript](https://www.typescriptlang.org/) - Write in TypeScript (or JS). Compiles down to JavaScript.
* [NodeJS](https://nodejs.org/en/) - Node Runtime Environment.
* [ExpressJS](https://expressjs.com/) - Server & Router Infrastructure Framework.
* [Express-Session](http://expressjs.com/en/resources/middleware/session.html) - Session cache middleware.
* [Express-CORS](https://expressjs.com/en/resources/middleware/cors.html) - CORS cross origin browser protection.
* [EJS](https://ejs.co/) - Serves Client Views.
* [ESLint](https://eslint.org/) - Code Parsing, Styling & Error Checking.
* [Mocha-Chai](https://mochajs.org/) - Testing with Mocha Framework, using the Chai Library.
* [Nodemon](https://nodemon.io/) - Restart Application without Compiling, on a Change to Watched Files.
* [Rimraf](https://www.npmjs.com/package/rimraf) - Directory Cleaner Tool.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Project Secrets Stored in a Local .env File.
* [SimpleTxtLogger](https://www.npmjs.com/package/simple-txt-logger) - Logging tool.
* [@types/*](https://www.npmjs.com/package/@types/node) - Various JS->TS Typesetting modules, to import types and make full use of TypeScript features with an imported module.

<br>

*- See [Full Instructions](#setup-instructions) to create this template yourself, without any of extra modules you do not want/need.*

<br><hr><br>



<!-- GET STARTED -->
## Get Started
For help or guidance in downloading and running the application, see the following subsections.

<br>

#### Prerequisites
[You must have npm (node package manager) and Nodejs installed on your system!](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

1. Update npm:
  ```sh
  npm install npm@latest -g
  ```
<br>

#### Installation
1. Clone/Download:
  ```sh
  git clone https://github.com/tberey/node-typescript-blank-website-template.git
  ```
2. Install:
  ```sh
  npm install
  ```
3. Start:
  ```sh
  npm run start
  ```

<br><hr><br>



<!-- USAGE EXAMPLES -->
## Usage

| Endpoint | Action/Desc. | Full URI <i>(when hosted locally, on port 3000)</i> |
|:---|:---|:---|
| <ul><li>GET "/"</li></ul> | Homepage:<br>The client-side landing page. | <ul><li>"`http://localhost:3000/`"</li></ul> |

<br>

### Screenshots

Logging Sample<br>
![Screenshot#1](https://github.com/tberey/node-typescript-blank-website-template/blob/master/screenshots/screenshot-logging.png?raw=true)

Website Screenshot 1<br>
![Screenshot#1](https://github.com/tberey/node-typescript-blank-website-template/blob/master/screenshots/screenshot-1.png?raw=true)

Website Screenshot 2<br>
![Screenshot#1](https://github.com/tberey/node-typescript-blank-website-template/blob/master/screenshots/screenshot-2.png?raw=true)

Website Screenshot 3<br>
![Screenshot#1](https://github.com/tberey/node-typescript-blank-website-template/blob/master/screenshots/screenshot-3.png?raw=true)

Website Screenshot 4<br>
![Screenshot#1](https://github.com/tberey/node-typescript-blank-website-template/blob/master/screenshots/screenshot-4.png?raw=true)

<br><hr><br>



<!-- SETUP INSTRUCTIONS -->
## Setup Instructions
The following steps are complete instructions to create this template, but without any of the extra modules, and begin a brand new project in Nodejs with TypeScript from a blank slate. The commands are shell commands, to be carried out in a terminal, console or other shell environment.

1. Create a new local directory and change current directory to new one:
  ```sh
  mkdir <PROJECT_NAME> && cd <PROJECT_NAME>
  ```
2. Initialize a new package.json file:
  ```sh
  npm init -y
  ```
3. Install TypeScript dependencies:
  ```sh
  npm i --save-dev typescript ts-node
  ```
4. Initialize a new tsconfig.json file:
  ```sh
  npx tsc --init
  ```
5. Some basic parameters to use in the tsconfig.json file. [My settings for this file can be found here](https://github.com/tberey/node-typescript-blank-website-template/blob/master/tsconfig.json). You can adjust this further with your own preferences, if needed.
  ```sh
  {
    "compilerOptions": {
      "target": "es6",
      "module": "commonjs",
      "declaration": true,
      "sourceMap": true,
      "outDir": "build",
      "rootDir": "./",
      "strict": true,
      "esModuleInterop": true
    }
  }
  ```
6. Create main.ts, the entry point into the application:
  ```sh
  echo "console.info('Hello, World');" > main.ts
  ```
7. Some basic information and scripts, for the package.json file:
  ```sh
  {
    "name": "<App-Name>",
    "version": "1.0.0",
    "description": "<App_Desc>",
    "main": "build/main.js",
    "types": "build/main.d.ts"
    "scripts": {
      "setup": "npm update && npm install",
      "build": "tsc",
      "start": "node build/main.js",
      "start:src": "ts-node main.ts"
    }
  }
  ```
8. Install, compile and start application (it won't do much yet, but you're off to a running start now):
  ```sh
  npm run setup
  npm run build
  npm run start
  ```
<sub><b><i>^ '`npm run setup`' will install and update the project and it's dependencies, then '`npm run build`' will compile the project into JavaScript, and finally '`npm run start`' will run the project.</i></b></sub>

<br><hr><br>



<!-- ROADMAP -->
## Roadmap
Below is the refined and confirmed roadmap, that has been planned for completion. See [open issues](https://github.com/tberey/node-typescript-blank-website-template/issues) and also the [project board](https://github.com/tberey/node-typescript-blank-website-template/projects), for any other proposed features or known issues, which may not be listed below.

| Feature/Task/Bugfix | Details | Version <i>(if released)</i> | Notes |
|:---|:---|:---|:---|
| <i>Bug#1</i> | <i>Bug details...</i> | <i>0.0.1</i> | <i>example</i> |
| <i>Feature#4</i> | <i>Feature details...</i> |   | <i>example</i> |

<br><hr><br>



<!-- CHANGELOG -->
## Changelog

| Version | Date | Changes |
|:---|:---|:---|
| 1.0.0 | 2023-12-04 | <ul><li>Initial Commit.</li><li>Add initial directory structure and files.</li><li>Add Screenshots directory, and images.</li><li>Create and format README.md</li></ul> |


<br><hr><br>



<!-- CONTRIBUTING -->
## Contributing
Contributions are welcomed and, of course, **greatly appreciated**.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/Feature`)
3. Commit your Changes (`git commit -m 'Add some Feature'`)
4. Push to the Branch (`git push origin feature/Feature`)
5. Open a Pull Request.

<br><hr><br>



<!-- CONTACT -->
### Contact

<b>Tom Berey</b>; <i>Project Manager, Lead Developer, Principal Tester & Customer Services;</i><br>tomberey1@gmail.com;

* [Issues & Requests.](https://github.com/tberey/typescript-node-fresh-start-template/issues)
* [My Other Projects.](https://github.com/tberey?tab=repositories)
* [Personal Website.](https://tberey.github.io/)
* [Linked In.](https://uk.linkedin.com/in/thomas-berey)

<br><hr><br>

<!-- ACKNOWLEDGEMENTS -->
### Acknowledgements

* [Me](https://github.com/tberey)
