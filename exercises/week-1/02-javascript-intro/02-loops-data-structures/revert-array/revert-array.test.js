const revertArray = require('./revert-array')

describe('', () => { 
    it('should', () => { 
        expect(revertArray([1, 2, 3])).toEqual([3, 2, 1]);
        expect(revertArray(["a", "b", "c"])).toEqual(["c", "b", "a"]);
        expect(revertArray([true, false, true])).toEqual([true, false, true]);
        expect(revertArray([])).toEqual([]);
    })
})