import 'mocha';
import { expect } from 'chai';
// process.env.NODE_ENV = 'test';

describe('simple test', () => {
  it('it should return 0.0.1', (done) => {
    const one = '0.0.1';
    expect(one).to.equal('0.0.1');
    done();
  })
});
