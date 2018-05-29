import 'mocha';
import 'chai-http'; // for types
import * as chai from 'chai';
import Express from '../../src/Express';

chai.use(require('chai-http'));
const expect = chai.expect;
const app = new Express().app;

describe('Express test', () => {
  it('/GET version should return 0.0.1', async () => {
    const expectedVersion = 'v1'; // todo: get version from config
    const response = await chai.request(app).get('/api/version');
    expect(response.status).to.equal(200);
    expect(response.body).to.haveOwnProperty('version').to.equal(expectedVersion);
    return new Promise((resolve) => resolve()); // we can`t use done callback with async :(
  })
});
