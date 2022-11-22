// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
// test('adds 1 + 2 to equal 3', () => {
//     // TODO
//     expect(1 + 2).toBe(3);
// });
// TODO - Part 2

test('isValidPhoneNumber - basic', () => {
    expect(functions.isPhoneNumber('(559) 432-7843')).toBe(true);
});

test('isValidPhoneNumber - basic2', () => {
    expect(functions.isPhoneNumber('559-432-7843')).toBe(true);
});

test('isValidPhoneNumber - foreign character', () => {
    expect(functions.isPhoneNumber('(AAA) AAA-AAAA')).toBe(false);
});

test('isValidPhoneNumber - missing paren', () => {
    expect(functions.isPhoneNumber('AAA (AAA)-AAAA')).toBe(false);
});

test('isValidEmail - basic1', () => {
    expect(functions.isEmail('joeshmo@ucsd.edu')).toBe(true);
})

test('isValidEmail - basic2', () => {
    expect(functions.isEmail('hra321@gmail.com')).toBe(true);
})

test('isValidEmail - missing @', () => {
    expect(functions.isEmail('hra321ATgmail.com')).toBe(false);
})

test('isValidEmail - no period', () => {
    expect(functions.isEmail('hra321@gmailcom')).toBe(false);
})

test('isStrongPassword - basic1', () => {
    expect(functions.isStrongPassword('jOSd34_3')).toBe(true);
})

test('isStrongPassword - basic2', () => {
    expect(functions.isStrongPassword('jit_d_d23_asdk')).toBe(true);
})

test('isStrongPassword - failure1', () => {
    expect(functions.isStrongPassword('123')).toBe(false);
})

test('isStrongPassword - failure2', () => {
    expect(functions.isStrongPassword('123456789ABCDEFGHIJK')).toBe(false);
})

test('isDate - basic1', () => {
    expect(functions.isDate('03/29/2002')).toBe(true);
})

test('isDate - basic2', () => {
    expect(functions.isDate('11/21/2022')).toBe(true);
})

test('isDate - missing /', () => {
    expect(functions.isDate('11212022')).toBe(false);
})

test('isDate - invalid formate', () => {
    expect(functions.isDate('11/21/22')).toBe(false);
})

test('isHexColor - basic1', () => {
    expect(functions.isHexColor('#12F')).toBe(true);
})


test('isHexColor - basic2', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
})

test('isHexColor - invalid character', () => {
    expect(functions.isHexColor('#G2F')).toBe(false);
})

test('isHexColor - too long', () => {
    expect(functions.isHexColor('#342D3F32DF')).toBe(false);
})