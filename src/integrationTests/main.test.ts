import { Server } from "http";
const request = require("supertest");
const loadtest = require("loadtest");

let server:Server;
describe("main route test", () => {
  beforeEach(() => {
    server = require("../server");
  });
  afterEach(() => {
    server.close();
  });
  describe("Test service", () => {
    it("should check the response coming from /main/test", async (done) => {
      let res = await request(server).get("/test");
      expect(res.status).toBe(200);
      done();
    });
    it("should check the response coming from /main/test(POST)", async (done) => {
      let res = await request(server).post("/test");
      expect(res.status).toBe(201);
      done();
    });
  });
});
