[![Build Status](https://travis-ci.org/zrrrzzt/wcag-validator.svg?branch=master)](https://travis-ci.org/zrrrzzt/wcag-validator)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# wcag-validator

A Node.js module/CLI app for checking web accessibility using achecker.ca.

In order to use this module you must supply a Web Service ID from achecker.
You can register for free at [http://achecker.ca/](http://achecker.ca/)

This module implements the Accessibility validation review from [Achecker Web Service API](http://achecker.ca/documentation/web_service_api.php).

## Installation

```sh
$ npm install wcag-validator
```

or globally for CLI app

```sh
$ npm install wcag-validator -g
```

## Usage - module

Create an options object.

**uri** URI to page you want to validate (required)

**id** Your web service ID from Achecker (required)

**output** Output format of report. Defaults to 'html' can be set to 'rest'

**guide** Guidelines to validate against. Defaults to 'WCAG2-AA'. Alternatives: 'BITV1', '508', 'STANCA', 'WCAG1-A', 'WCAG1-AA', 'WCAG1-AAA', 'WCAG2-A', 'WCAG2-AA', 'WCAG2-AAA'. For multiple guidelines separate with comma.

**offset** The line offset to begin validation on the html output from URI.. Defaults to 0.

```JavaScript
const validator = require('wcag-validator')
const options = {
  uri : 'http://uri-to-validate.com',
  id : 'your-webservice-id-from-achecker'
}

validator(options, (err, result) => {
  if (err) {
    throw err
  }
  console.log(result)
})
```

## Usage - CLI app

```sh
$ wcag-validator <uri to validate> --id=<achecker id>
```

Optional

```sh
$ wcag-validator <uri to validate> --id=<achecker id> --output=<output> --guide=<guide> --offset=<offset>
```

## License
[MIT](LICENSE)
