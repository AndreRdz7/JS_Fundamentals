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

//Brackets [] - Character sets
re = /gr[ae]y/i;   // must be a or e, but not null
re = /[GF]ray/;    // must be G or F, but not null
re = /[^GF]ray/;   // match anything except G or F
re = /^[GF]ray/;   // match if starts with G or F
re = /[A-Z]ray/;   // match any uppercase
re = /[a-z]ray/;   // match any lowercase
re = /[A-Za-z]ray/;// match any
re = /[0-9]ray/;   // match any number

//Braces {} - Quantifiers
re = /Hel{2}o/i;   // looks for exact two l
re = /Hel{2,4}o/i; // looks for two to four l
re = /Hel{2,}o/i;  // looks for att least two l

//Parenthesis () - Grouping
re = /^([0-9]x){3}$/; //looks for ex: 3x3x3x, 1x2x3x




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