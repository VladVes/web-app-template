import 'mocha';
import 'chai-http'; // for types
import * as chai from 'chai';
import MongoDB from '../../src/MongoDB';
import Express from '../../src/Express';

const db = new MongoDB();
const app = new Express().app;

chai.use(require('chai-http'));
// todo: test does nothing

describe('Database test', () => {
  it('/GET should work', async () => {
    return new Promise((resolve) => {
      resolve();
    });
      // return new Promise((resolve) => resolve());
    //   setTimeout(() => resolve(), 1 * 1000);
    //   try {
    //     db.connect(app);
    //   } catch (e) {
    //     reject(e);
    //   }
    // });
  })
});
