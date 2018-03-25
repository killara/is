const assert = require('assert');
const is = require('.');

assert.strictEqual(is.array([]), true);
assert.strictEqual(is.array({}), false);

assert.strictEqual(is.string(""), true);

assert.strictEqual(is.symbol(Symbol()), true);

assert.strictEqual(is.function(() => {}), true);

assert.strictEqual(is.boolean(true), true);

assert.strictEqual(is.undefined(undefined), true);

assert.strictEqual(is.NaN(NaN), true);

assert.strictEqual(is.finite(Infinity), false);

assert.strictEqual(is.number(1.1), true);

assert.strictEqual(is.null(null), true);

assert.strictEqual(is.regexp(/^$/), true);

assert.strictEqual(is.date(new Date()), true);

assert.strictEqual(is.error(new Error()), true);

assert.strictEqual(is.object(null), false);
assert.strictEqual(is.object(new Object()), true);

assert.strictEqual(is.buffer(Buffer.from([])), true);

assert.strictEqual(is.primitive(null), true);
assert.strictEqual(is.primitive(''), true);
assert.strictEqual(is.primitive(0), true);
assert.strictEqual(is.primitive(undefined), true);
assert.strictEqual(is.primitive(true), true);
assert.strictEqual(is.primitive(Symbol()), true);
