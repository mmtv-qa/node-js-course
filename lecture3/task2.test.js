const {romanToArabic, charToArabic} = require("./task2");


describe('romanToArabic', () => {
    test('should convert I to 1', () => {
        expect(romanToArabic('I')).toBe(1);
    });

    test('should convert XV to 15', () => {
        expect(romanToArabic('XV')).toBe(15);
    } );

    test('should convert XXIV to 24', () => {
        expect(romanToArabic('XXIV')).toBe(24);
    })

    test('should not convert incorrect value', () => {
        try {
            romanToArabic('WRONG_DATA')
        } catch (e) {
            expect(e.message).toBe('Invalid char W');
        }})
});

