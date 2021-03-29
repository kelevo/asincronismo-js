//ECMAScript 6 (promises)
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whoooops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

//-------------------------------------------------------------------

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) { //We create an error
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whoooop!');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

//-----------------------------------------------------------------
//Run all promises and return an array with the results
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response)
    })
    .catch(err => {
        console.error(err);
    })