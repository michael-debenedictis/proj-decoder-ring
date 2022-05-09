const expect = require('chai').expect;

const substitutionModule = require('../src/substitution.js');

describe('substitution', () => {
    it('should handle an input and alphabet with special characters when decoding', () => {
        const expected = 'message';
        const actual = substitutionModule.substitution('y&ii$r&', '$wae&zrdxtfcygvuhbijnokmpl', false);
        expect(actual).to.equal(expected);
    });

    it('should handle an input with spaces', () => {
        const expected = 'elp xhm xf mbymwwmfj dne';
        const actual = substitutionModule.substitution('You are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev');
        expect(actual).to.equal(expected);
    });

    it('should return false whenever the alphabet argument is not exactly 26 characters', () => {
        const expected = false;
        const actual = substitutionModule.substitution('codes', 'qwghejnm');
        expect(actual).to.equal(expected);
    });
});