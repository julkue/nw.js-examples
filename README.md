# nw.js-examples

[NW.js][nwjs] features demonstrated in a simple project.

![application screenshot][screen]

This project is part of the article [Building a Cross-Platform Desktop App with NW.js][article] on Sitepoint.

## Requirements

- [Node.js][nodejs]

## Installation

1. Clone or [download][download] this repository
2. Navigate to the project folder with a CLI
3. Run the following:

   ```bash
   $ npm install
   $ cd src/
   $ npm install
   $ cd ..
   ```

## Development

To run the application directly in your development environment run:

```bash
$ npm run dev
```

## Production

To build the application for Windows 32/64 bit, Mac OS X 64 bit and Linux 32/64 bit run the following:

```bash
$ npm run prod
```

The output files can be found under `dist/`.

[nwjs]: http://nwjs.io/
[screen]: https://github.com/julmot/nw.js-examples/blob/master/.github/screen.png
[article]: https://www.sitepoint.com/cross-platform-desktop-app-nw-js
[sitepoint]: https://www.sitepoint.com/
[nodejs]: https://nodejs.org/en/
[download]: https://github.com/julmot/nw.js-examples/archive/master.zip
