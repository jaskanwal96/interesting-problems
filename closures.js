function outer () {
    counter = 0;
    function incrementCounter() {
        counter++;
        console.log('Counter: ',counter);
    }
    return incrementCounter;
}

const myFunction = outer();
myFunction();
myFunction();


const myNewFunction = outer();
myNewFunction();
myNewFunction();
