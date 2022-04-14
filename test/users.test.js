//process.env.NODE_ENV = "test";
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();
chai.use(chaiHttp);

describe("/GET virtual", () => {
  it("it should GET all users first name and last name", (done) => {
    chai
      .request(server)
      .get("/users/virtual")
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.an("object");
        done();
      });
  });
});
