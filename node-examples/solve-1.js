// this is a Node module
var rect = require('./rectangle-1');

function solveRect(l, b) {
  console.log("Solving for rectangle with l = " + l + " and b = " + b);
  if (l < 0 || b < 0) {
    console.log("Rectangle dimensions must be greater than zero: l = " + l +
      ", and b = " + b);
  }
  else {
    console.log("Area of rectangle is " + rect.area(l, b));
    console.log("Perimeter of rectangle is " + rect.perimeter(l, b));
  }
}

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);
