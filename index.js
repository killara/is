'use strict';

exports.array = Array.isArray;

exports.string = arg => typeof arg === 'string';

exports.symbol = arg => typeof arg === 'symbol';

exports.function = arg => typeof arg === 'function';
exports.func = exports.function;

exports.boolean = arg => typeof arg === 'boolean';
exports.bool = exports.boolean;

exports.undefined = arg => arg === undefined;
exports.undef = exports.undefined;

exports.NaN = Number.isNaN;
exports.nan = exports.NaN;

exports.finite = Number.isFinite

exports.number = arg => typeof arg === 'number';

exports.null = arg => arg === null;

const toString = arg => Object.prototype.toString.call(arg);

exports.regexp = arg => toString(arg) === '[object RegExp]';
exports.date = arg => toString(arg) === '[object Date]';
exports.error = arg => toString(arg) === '[object Error]';
exports.object = arg => typeof arg === 'object' && arg !== null;
exports.buffer = Buffer.isBuffer;


exports.primitive = arg => {
  return arg === null       ||
  typeof arg === 'boolean'  ||
  typeof arg === 'number'   ||
  typeof arg === 'string'   ||
  typeof arg === 'symbol'   ||
  typeof arg === 'undefined'
}

exports.alphanum = arg => /^[1-9a-z]+$/i.test(arg);
exports.alphanumeric = exports.alphanum;
