function addNumbers(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('Invalid inputs must be numbers');
        }
    });
}

// Example usage:
addNumbers(5, 10)
    .then(sum => console.log('Sum:', sum))
    .catch(error => console.error('Error:', error));

addNumbers(5, '10')
    .then(sum => console.log('Sum:', sum))
    .catch(error => console.error('Error:', error));


