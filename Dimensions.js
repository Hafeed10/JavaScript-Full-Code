let $div =$("div.box");

console.log("Height is ", $div.height());
console.log("Width is ", $div.width());

console.log("inner is Height", $div.innerHeight());
console.log("inner is width ", $div.innerWidth());

console.log("Outer Height is ", $div.outerHeight());
console.log("Outer Width is ", $div.outerWidth());

console.log("Outer Height with margin is ", $div.outerHeight(true));
console.log("Outer Width with margin is ", $div.outerWidth(true));
