const {objectIsEmpty, equalObjects, objectsSubset, getByKey} = require('./task1')


describe('objectIsEmpty', () => {
    test('to empty object', () => {
        let obj = {}
        expect(objectIsEmpty(obj)).toBe(true)
    })

    test('to non-empty object', () => {
        let obj = {a: 1}
        expect(objectIsEmpty(obj)).toBe(false)
    })
})


describe('equalObjects', () => {
    test('to equal objects', () => {
        a = {a: 1, b: 2}
        b = {a: 1, b: 2}
        expect(equalObjects(a, b)).toBe(true)
    })

    test('to non-equal objects', () => {
        a = {a: 1, b: 2}
        b = {a: 1, b: 3}
        expect(equalObjects(a, b)).toBe(false)
    })
})

describe('objectsSubset', () => {
    test('with commons', () => {
        let a = {a: 1, b: 2, f: '#'}
        let b = {a: 1, b: 2, c: 3}
        let expected = {a: 1, b: 2}
        let result = objectsSubset(a, b)
        expect(JSON.stringify(result)).toBe(JSON.stringify(expected))
    })

    test('without commons', () => {
        let a = {a: 1, b: 2, f: '#'}
        let b = {c: 3, d: 4}
        let expected = {}
        let result = objectsSubset(a, b)
        expect(JSON.stringify(result)).toBe(JSON.stringify(expected))
    })
})

describe('getByKey', () => {
    test('with existing key', () => {
        let obj = {a: 1, b: 2, c: 3}
        expect(getByKey(obj, 'b')).toBe(2)
    })

    test('without existing key', () => {
        let obj = {a: 1, b: 2, c: 3}
        try {
            getByKey(obj, 'd')
        } catch (e) {
            expect(e.message).toBe('No such key')
        }
    })
})