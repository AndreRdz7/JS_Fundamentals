//template literals

const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

// w/o template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul>' + 
        '<li>Name: ' + name + '</li>' +
        'li>Age: ' + age + '</li>' + 
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>' +
        '</ul>';

//this creates a dotted list in html
//with template literals/strings (es6)
//use ` instead of " or ', using it as variables with $
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;

document.body.innerHTML = html;