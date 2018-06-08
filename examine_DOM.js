let val;

val = document;
val = document.all;
val = document.all[0];

console.log(val);

val = document.all.length;
console.log(val);

val = document.all.domain;
console.log(val);

val = document.all.URL;
console.log(val);

val = document.all.doctype;
console.log(val);

val = document.all.contentType;
console.log(val);

val = document.forms[0];
console.log(val);

//retrive info from form
val = document.forms[0].id;
console.log(val);

val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;

val = document.images;

val = document.scripts;
val = document.scripts[0].getAttribute('src');

//the only way to use a foreach to go through scripts
let scripts = document.scripts;
let scriptsArr = Array.from(scripts);
scriptsArr.forEach(function(script){
    console.log(script); 
});