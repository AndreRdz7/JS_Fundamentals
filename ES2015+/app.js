// ES6 Map = key value pairs, any type
const map1 = new Map();

//set keys
const key1 = 'some string',
      key2 = {};
      key3 = function(){};

//set map values by key
map1.set(key1,'Value of key1');
map1.set(key2,'Value of key2');
map1.set(key3,'Value of key3');

//get values by keys
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

//count values
console.log(map1.size);

//iterating

//looping using for of to get keys and values
for(let [key,value] of map1){
    console.log(`${key} = ${value}`);
}

//iterate keys only
for(let key of map1.keys()){
    console.log(key);
}

//iterate values only
for(let value of map1.values()){
    console.log(value);
}

//loop foreach
map1.forEach(function(value,key) {
    console.log(`${key} = ${value}`);
});

//convert to arrays
//create array of key value pais
const keyValArr = Array.from(map1);
console.log(keyValArr);

//create array of values
const valArr = Array.from(map1.values());
console.log(valArr);

//create array of keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);