const canIDriveAndVote  = require('./can-i-drive-and-vote')

describe('', () => { 
    it('should', () => { 
        expect(canIDriveAndVote(18)).toBe(true);
        expect(canIDriveAndVote(22)).toBe(true);

        expect(canIDriveAndVote(16)).toBe(false);
        expect(canIDriveAndVote(17)).toBe(false);
    })
})