

function objectIsEmpty(obj) {
    return Object.keys(obj).length === 0
}

function equalObjects(firstObject, secondObject) {
    return JSON.stringify(firstObject) === JSON.stringify(secondObject);
}

function objectsSubset(firstObject, secondObject) {
    let result = {};
    for (let key in firstObject) {
        if (secondObject.hasOwnProperty(key)) {
            result[key] = firstObject[key];
        }
    }
    return result;
}

function getByKey(obj, key) {
    if (obj.hasOwnProperty(key)) {
        return obj[key];
    } else {
        throw new Error('No such key');
    }
}


module.exports = {objectIsEmpty, objectsSubset, getByKey, equalObjects}