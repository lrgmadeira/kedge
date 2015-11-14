mocha.ui('bdd');
mocha.reporter('html');

chai.should()

describe('tests', function () {
  it('should test', function () {
    var wut = 'wutwut'

    wut.should.equal('wutwut');
  });
});

// run
window.mochaPhantomJS ? mochaPhantomJS.run() : mocha.run();