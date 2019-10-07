// function that returns a Promise
const think = (response) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`Done thinking. The answer is: ${response}.`);
        }, 1500);
    });
};


// function that waits for the Promise
const answer = (response) => {
    let answer = think(response).then((val) => {
        console.log(val);
    });

    // THIS will be executed before the block of code above
    console.log("Waiting for response...")
};


// call 
answer("red");