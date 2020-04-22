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
      let postRes = await request(server).post("/test");
      expect(postRes.status).toBe(201);
      let getRes = await request(server).get("/test");
      expect(getRes.status).toBe(200);
      done();
    });
  });
});
