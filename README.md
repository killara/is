# is

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
