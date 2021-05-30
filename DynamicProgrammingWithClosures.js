
// Comparison between recursive and dynamic solution for the fibonacci series

let start = Date.now();

function fib(n) {
    if (n <= 0) return 0;
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n -2);
}
console.log(fib(44));

console.log('Time taken for the program to run without DP',(Date.now() - start) / 1000);

// This took 7 seconds for the code to find the 44th element

// Lets Combine Closures and Dynamic Programming

start = Date.now();
function outer() {
    dp = {};
    function fib(n) {
        if (n <= 0) return 0;
        if (n <= 2) return 1;
        if (dp[n] != undefined) return dp[n];
        dp[n] =  fib(n - 1) + fib(n - 2);
        return dp[n];
    }
    return {fib, dp};
}
const myOuter = outer();
const myFib = myOuter.fib;
console.log(myFib(44));

console.log('Time taken for the program to run with DP:', (Date.now() - start) / 1000);
// Output
// 701408733
// Time taken for the program to run without DP 10.522
// 701408733
// Time taken for the program to run with DP: 0.02