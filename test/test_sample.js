var expect = require('expect.js');

describe('Array', () => {
  describe('#indexOf()',() => {
    it('should return -1 when the value is not present', function () {
      expect([1, 2, 3].indexOf(4)).to.be(-1);
    });
  });
});
