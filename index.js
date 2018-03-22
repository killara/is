'use strict';

exports.array = Array.isArray;

exports.function = f => typeof f === 'function';

exports.boolean = exports.bool = b => typeof b === 'boolean';
