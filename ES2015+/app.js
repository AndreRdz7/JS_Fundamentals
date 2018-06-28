//sets - unique values, any type
const set1 = new Set();

//add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
console.log(set1);
const set2 = new Set([1,true,'str']);
console.log(set2);

//get size
console.log('size: ' + set1.size);

//check for values
console.log(set1.has(100));
console.log(set1.has(50 + 50));
//dont recognize objs like(because its a reference value):
console.log(set1.has({name: 'John'}));

//proof, pointing to different location in memory, not a primitive type
console.log({name: 'John'} === {name: 'John'});

//delete form set
set1.delete(100);
console.log('after deleting');
console.log(set1);

//iterate
console.log('iterations');
//for...of
for(let item of set1){
    console.log(item);
}

set1.forEach((value) => {
    console.log(value);
});

//convert to array

const setArr = Array.from(set1);
console.log(setArr);