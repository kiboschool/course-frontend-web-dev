const fizzBuz  = require('./fizzbuzz')

describe('', () => { 
    it('should', () => { 
        expect(fizzBuz(3)).toBe('Fizz');
        expect(fizzBuz(9)).toBe('Fizz');

        expect(fizzBuz(5)).toBe('Buzz');
        expect(fizzBuz(20)).toBe('Buzz');

        expect(fizzBuz(15)).toBe('FizzBuzz');
        expect(fizzBuz(30)).toBe('FizzBuzz');

        expect(fizzBuz(4)).toBe(4);
        expect(fizzBuz(7)).toBe(7);
    })
})