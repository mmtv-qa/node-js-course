

function uniqualizeArray (array) {
    const setOfArray = new Set(array);
    return Array.from(setOfArray);
}

module.exports = uniqualizeArray;