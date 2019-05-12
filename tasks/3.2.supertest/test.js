const request = require ('./node_modules/supertest');
let http = request ('http://localhost:3000');
const {expect} = require ('chai');

describe ('test server', function () {
  it ('a', function (done) {
    http.get ('/a').expect (
      200,
      {
        code: 0,
        data: {
          a: 12,
          b: 24
        },
      },
      done
    );
  });

  it ('b', function (done) {
    http
      .post ('/b')
      .send ({
        name: 1,
      })
      .expect ('token', /^\w{10}$/)
      .expect (200)
      .then (response => {
        let {body} = response;
        expect (body).to.have.nested.property ('data.info');
        done ();
      })
      .catch (done);
  });
});
