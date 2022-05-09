const expect = require("chai").expect;

const caesarModule = require("../src/caesar");

describe("caesar", () => {
    it("should return false whenever the shift argument isn't present", () => {
        const actual = caesarModule.caesar('thinkful');
        const expected = false;
        expect(actual).to.equal(expected);
    })

    it("should return false whenever the shift argument is equal to 0", () => {
        const actual = caesarModule.caesar('thinkful', 0);
        const expected = false;
        expect(actual).to.equal(expected);
    })

    it("should return false whenever the shift argument is less than -25", () => {
        const actual = caesarModule.caesar('thinkful', -26);
        const expected = false;
        expect(actual).to.equal(expected);
    })

    it("should return false whenever the shift argument is greater than 25", () => {
        const actual = caesarModule.caesar('thinkful', 26);
        const expected = false;
        expect(actual).to.equal(expected);
    })

    
})