'use strict';

exports.array = Array.isArray;

exports.function = arg => typeof arg === 'function';
exports.func = exports.function;

exports.boolean = arg => typeof arg === 'boolean';
exports.bool = exports.boolean;

exports.undefined = arg => arg === undefined;
exports.undef = exports.undefined;

exports.NaN = Number.isNaN;

exports.Finite = Number.isFinite
