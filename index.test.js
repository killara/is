'use strict';

const is = require('.');

test('is.array', () => {
  expect(is.array([])).toBe(true);
  expect(is.array({})).toBe(false);
});

test('is.string', () => {
  expect(is.string('')).toBe(true);
  expect(is.string({})).toBe(false);
});

test('is.symbol', () => {
  expect(is.symbol(Symbol())).toBe(true);
  expect(is.symbol('Symbol()')).toBe(false);
});

test('is.function', () => {
  expect(is.function(() => {})).toBe(true);
});

test('is.boolean', () => {
  expect(is.boolean(true)).toBe(true);
  expect(is.bool(false)).toBe(true);
});

test('is.undefined', () => {
  expect(is.undefined(undefined)).toBe(true);
  expect(is.undef(undefined)).toBe(true);
});

test('is.NaN', () => {
  expect(is.NaN(NaN)).toBe(true);
  expect(is.nan(NaN)).toBe(true);
});

test('is.finite', () => {
  expect(is.finite(Infinity)).toBe(false);
});

test('is.number', () => {
  expect(is.number(1.1)).toBe(true);
  expect(is.number('1.1')).toBe(false);
});

test('is.null', () => {
  expect(is.null(null)).toBe(true);
});

test('is.regexp', () => {
  expect(is.regexp(/^$/)).toBe(true);
});

test('is.date', () => {
  expect(is.date(new Date())).toBe(true);
});

test('is.error', () => {
  expect(is.error(new Error())).toBe(true);
});

test('is.object', () => {
  expect(is.object(null)).toBe(false);
  expect(is.object({})).toBe(true);
});

test('is.buffer', () => {
  expect(is.buffer(Buffer.from([]))).toBe(true);
});

test('is.primitive', () => {
  expect(is.primitive(null)).toBe(true);
  expect(is.primitive('')).toBe(true);
  expect(is.primitive(0)).toBe(true);
  expect(is.primitive(undefined)).toBe(true);
  expect(is.primitive(true)).toBe(true);
  expect(is.primitive(Symbol())).toBe(true);
});

test('is.alphanum', () => {
  expect(is.alphanum(1)).toBe(true);
  expect(is.alphanum('')).toBe(false);
  expect(is.alphanum('1')).toBe(true);
  expect(is.alphanum('1a')).toBe(true);
  expect(is.alphanum('1%')).toBe(false);
});

test('is.validPhoneNumber', () => {
  expect(is.validPhoneNumber('15200000000')).toBe(true);
  expect(is.validPhoneNumber('1520000000')).toBe(false);
  expect(is.validPhoneNumber('2520000000')).toBe(false);
});
