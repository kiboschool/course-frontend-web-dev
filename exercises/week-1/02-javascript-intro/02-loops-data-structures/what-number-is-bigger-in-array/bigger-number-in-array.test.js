const biggerNumberInArray = require('./bigger-number-in-array')

describe('', () => { 
    it('should', () => { 
        expect(biggerNumberInArray([1, 2, 3])).toBe(3);
        expect(biggerNumberInArray([-5, 0, 5])).toBe(5);
        expect(biggerNumberInArray([10, 10, 10])).toBe(10);
        expect(biggerNumberInArray([4])).toBe(4);
    })
})