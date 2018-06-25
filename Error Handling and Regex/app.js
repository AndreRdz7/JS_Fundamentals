let re;
//literal characters
re = /hello/;
re = /hello/i;

//metacharacter symbols
re = /^h/i;     //must start with
re = /world$/i; //must end with
re = /^hello$/i;
re = /^h.llo$/i; // ignores whats in between (dot place)
re = /h*d/i;     // ignores whats in between (all)
re = /gre?a?y/;  // optional characters (any of them or none at all)
re = /gray\?/;   // scape characters

//string to match
const str = 'Hello World';

//log results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re,str);