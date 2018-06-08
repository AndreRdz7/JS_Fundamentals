//window is the global object

//window is the global objects
//window methods/objects/properties

window.console.log(123);

//alert
window.alert('Hello World');

//prompt
const input = prompt();
alert(input)

//confirm
if(confirm('Are you sure?')){
    console.log('Yes');
} else {
    console.log('No');
}

let val,val2;

//outer edges
val = window.outerHeight;
val2 = window.outerWidth;
console.log(val);
console.log(val2);

//inner edges
val = window.innerHeight;
val2 = window.innerWidth;
console.log(val);
console.log(val2);

//scroll points
val = window.scrollY;
//using in html
/*
    <div style = "margin-top:1000px;"></div>
*/
console.log(val);

//location object
val = window.location;
console.log(val);
val = window.location.hostname;
console.log(val);
val = window.location.port;
console.log(val);
val = window.location.href;
console.log(val);
val = window.location.search;
console.log(val);

//redirect
// window.location.href = 'http://google.com';

//reload
// window.location.reload();

//history object
// window.history.go(-1);

//history length
val = window.history.length;
console.log(val);

//navigator object
val = window.navigator;
console.log(val);