const bothNumbersArePair  = require('./both-numbers-are-pair')

describe('', () => { 
    it('should verify', () => { 

        expect(bothNumbersArePair(4, 6)).toBe(true);
        expect(bothNumbersArePair(0, 2)).toBe(true);

        expect(bothNumbersArePair(3, 6)).toBe(false);
        expect(bothNumbersArePair(4, 7)).toBe(false);
        expect(bothNumbersArePair(3, 7)).toBe(false);
    })
})