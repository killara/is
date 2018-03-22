const is = require('.');

var a = [];
var b = true;
function f() {}
function *g() {}
var h = {}

console.log(is.array(a));
console.log(is.bool(b));
console.log(!is.boolean(a));
console.log(is.function(f));
console.log(is.function(g));
console.log(!is.function(h));

