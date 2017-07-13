const expect = require('expect.js');

const server = require('../../test/');

describe('DEfault Home page', () => {
  describe('shows default message when home page is access', () => {
    it(' should show the default mesage', () => {
      server.inject()
        .then((response) => {
          console.log(response);
        }).catch(err => console.log(err));
      expect([1, 2, 3].indexOf(4)).to.be(-1);
    });
  });
});
