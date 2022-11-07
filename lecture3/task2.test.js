const {romanToArabic, arabicToRoman} = require("./task2");


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


describe('arabicToRoman', () => {
test('should convert 1 to I', () => {
        expect(arabicToRoman(1)).toBe('I');
    });

    test('should convert 15 to XV', () => {
        expect(arabicToRoman(15)).toBe('XV');
    });

    test('should convert 24 to XXIV', () => {
        expect(arabicToRoman(24)).toBe('XXIV');
    });

    test('should not convert incorrect value', () => {
        try {
            arabicToRoman('WRONG_DATA')
        } catch (e) {
            expect(e.message).toBe('Should be a number');
        }})
});

