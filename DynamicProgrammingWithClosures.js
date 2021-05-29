
// let start = Date.now();

// function fib(n) {
//     if (n <= 0) return 0;
//     if (n <= 2) return 1;
//     return fib(n - 1) + fib(n -2);
// }
// console.log(fib(44));

// console.log((Date.now() - start) / 1000);

// This took 7 seconds for the code to find the 44th element

// Lets Combine Closures and Dynamic Programming

let start = Date.now();
function outer(n) {
    let dp = new Array(n + 1).fill(-1);
    function fib(n) {
        if (n <= 0) return 0;
        if (n <= 2) return 1;
        if (dp[n] != -1) return dp[n];
        dp[n] =  fib(n - 1) + fib(n - 2);
        return dp[n];
    }
    return fib;
}
myFib = outer(100);
console.log(myFib(100));

console.log((Date.now() - start) / 1000);

// 354224848179262000000
// This code took 0.01 to find 100th Fibonachi Element