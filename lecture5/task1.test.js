const {objectIsEmpty, equalObjects, objectsSubset, getByKey} = require('./task1')
const expect = require('jest')


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
        a = {a: 1, b: 2, f: '#'}
        b = {a: 1, b: 2, c: 3}
        expect(objectsSubset(a, b)).toBe({a: 1, b: 2})
    })

    test('without commons', () => {
        a = {a: 1, b: 2, f: '#'}
        b = {c: 3, d: 4}
        expect(objectsSubset(a, b)).toBe({})
    })
})

describe('getByKey', () => {
    test('with existing key', () => {
        obj = {a: 1, b: 2, c: 3}
        expect(getByKey(obj, 'b')).toBe(2)
    })

    test('without existing key', () => {
        obj = {a: 1, b: 2, c: 3}
        try {
            getByKey(obj, 'd')
        } catch (e) {
            expect(e.message).toBe('No such key')
        }
    })
}