const expect = require('chai').expect;

const polybiusModule = require('../src/polybius.js');

describe('polybius', () => {
    it('should return a str even when encoding', () => {
        const expected = 'string';
        const actual = typeof polybiusModule.polybius('thinkful');
        expect(actual).to.equal(expected);
    });

    it('should return false whenever the number of characters in the input excluding spaces is odd when decoding', () => {
        const expected = false;
        const actual = polybiusModule.polybius('989898989', false);
        expect(actual).to.equal(expected);
    });
    
    it('should always keep the spaces', () => {
        const expected = '44324234 23513434112251';
        const actual = polybiusModule.polybius('this message');
        expect(actual).to.equal(expected);
    });

    it('should handle a str with uppercase', () => {
        const expected = '31115334';
        const actual = polybiusModule.polybius('Caps')
        expect(actual).to.equal(expected);
    });

    it('should handle i and j in the input str and return 42 in place for each of them when encoding', () => {
        const expected = '4251242445244222';
        const actual = polybiusModule.polybius('jerryrig');
        expect(actual).to.equal(expected);
    });

    it('should handle the character 42 when decoding', () => {
        const expected = '(i/j)erryr(i/j)g';
        const actual = polybiusModule.polybius('4251242445244222', false);
        expect(actual).to.equal(expected);
    });
})