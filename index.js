function declaringAFunction(){
    console.log("Writing down code");
}

// function declaringAFunction2(){
//     console.log("This is what I do after I write");
// }

// function declaringAFunction3(){
//     console.log("Then I review");
// }

function receivesAFunction(callBack){
    declaringAFunction();
    callBack();
}

function returnsANamedFunction(){
    return function named(){
        console.log("Returning a named function name named.")
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("A function who shall not be named.")
    }
}