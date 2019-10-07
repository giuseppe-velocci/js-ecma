// how to use async-await in js functions
function compute() {
    return new Promise(
        res => {
            let a = 0;
            // .. do tasks that require some time
            for (let i = 0; i < 999999999; i++) {
                a++;
            }
            res(a);
        }
    );
}

async function getCompute() {
    // then await for its completion
    let b = await(compute());
    console.log(b);
}

// then just sit and watch
getCompute();