let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();
chai.use(chaiHttp);

describe("/GET Books", () => {
  it("it should return string `respond with a resource`", (done) => {
    chai
      .request(server)
      .get("/book")
      .end((err, res) => {
        res.should.have.status(200);
        console.log(res.body)
        res.body.should.be.an("string");
        done();
      });
  });
});