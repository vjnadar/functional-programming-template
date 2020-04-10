const request = require("supertest");
const loadtest = require("loadtest");
let server;
describe("main route test", () => {
  beforeEach(() => {
    server = require("../src/server");
  });
  afterEach(() => {
    server.close();
  });
  describe("test", () => {
    it("should check the response coming from /main/test", async (done) => {
      let res = await request(server).get("/test");
      expect(res.status).toBe(200);
      done();
    });
  });
});
