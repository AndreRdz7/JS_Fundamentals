const user = {email: 'jd@gmail.com'};

try{
    // produces a ReferenceError
    // myFunction();

    // produces a TypeError
    // null.myFunction();

    // pruduces a SyntaxError
    // eval('Hello');

    // produces a URIError
    // decodeURIComponent('%')
    if(!user.name){
        // regular error handling
        // throw 'User has no name';
        // format self errors
        throw new SyntaxError('User has no name');
    }
} catch (e){
    // self created errors
    console.log(`User error: ${e.message}`)    
    // console.log(e);
    /*
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
    */
} finally {
    console.log('Finally runs regardless of result...')
}

console.log('Program continues');