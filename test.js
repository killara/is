const is = require('.');

var a = [];
function f() {}
function *g() {}
var h = {}

console.log(is.array(a));
console.log(is.function(f));
console.log(is.function(g));
console.log(!is.function(h));

