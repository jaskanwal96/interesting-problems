const fetch = require('node-fetch');
function display(data) {
    console.log(data);
}

const futureData = fetch('https://twitter.com/will/tweets/1');
futureData.then(display);

console.log('Hello World');