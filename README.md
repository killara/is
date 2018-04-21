# is

[![npm](https://img.shields.io/npm/v/@killara/is.svg)](https://www.npmjs.com/package/@killara/is)
[![Travis branch](https://img.shields.io/travis/killara/is/master.svg)](https://travis-ci.org/killara/is)
[![Codecov branch](https://img.shields.io/codecov/c/github/killara/is/master.svg)](https://codecov.io/github/killara/is?branch=master)
[![David deps](https://img.shields.io/david/killara/is.svg)](https://david-dm.org/killara/is)
[![Known Vulnerabilities](https://snyk.io/test/npm/@killara/is/badge.svg)](https://snyk.io/test/npm/@killara/is)
[![npm download](https://img.shields.io/npm/dt/@killara/is.svg)](https://www.npmjs.com/package/@killara/is)
[![jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)

is's a helper for Javascript

## Install

`npm i -S @killara/is`

## Example

```javascript

const is = require('@killara/is')

if (is.func(() => {})) {
  console.log('You are an amazing function!');
} 

```

## API

* is.array
* is.string
* is.symbol
* is.function (alias is.func)
* is.boolean (alias is.bool)
* is.undefined (alias is.undef)
* is.nan (alias is.NaN)
* is.finite
* is.number
* is.null
* is.regexp
* is.date
* is.error
* is.object
* is.buffer
* is.primitive

* is.alphanum (alias is.alphanumeric)
