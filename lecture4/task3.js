function createBase(base) {
    return function (num) {
        return base + num;
    }
}

module.exports = createBase;