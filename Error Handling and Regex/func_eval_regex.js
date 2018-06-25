//Evaluation functions
let re;

//i = case insensitive
//g = global search, multiple instances
re = /hello/i;

console.log('regex: ' + re);
console.log('regex text: ' + re.source);

//exec() - return result in an array or null
//looks for the word hello, it can be inside another
//word or at the end, and it will return the array
//and the index of where it starts
const result = re.exec('hello world');
console.log('Exec: ' + result);
//first value of the array
console.log('Exec first value: ' + result[0]);
console.log('Exec index: ' + result.index); 

//test() - return true of false
const res = re.test('Hello');
console.log('Test: ' + res);

//match() - return array or null
//returns what it matches
const str = 'Hello There';
const resu = str.match(re);
console.log('match: ' + resu);

//search() - return indexof first match, else -1
const st = 'Hello There';
const resul = str.search(re);
console.log('Search: ' + resul);

//replace() - return new string with some or all matvhes
const string = 'Hello There';
const newString = str.replace(re, 'Hi');
console.log(newString);