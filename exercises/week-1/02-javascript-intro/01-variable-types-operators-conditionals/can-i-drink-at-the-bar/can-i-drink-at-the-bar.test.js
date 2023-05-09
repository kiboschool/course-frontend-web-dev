const canIDrinkAtTheBar  = require('./can-i-drink-at-the-bar')

describe('', () => { 
    it('should', () => { 
        
        expect(canIDrinkAtTheBar(21)).toBe(true);
        expect(canIDrinkAtTheBar(25)).toBe(true);
        
        expect(canIDrinkAtTheBar(18)).toBe(false);
        expect(canIDrinkAtTheBar(20)).toBe(false);
    })
})