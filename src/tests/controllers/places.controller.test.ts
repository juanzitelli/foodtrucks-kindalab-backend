import express from "express";
import request from "supertest";
import { app } from "../../../app";
require("dotenv").config();

describe("Tests on Places controller", () => {
  let testApp: request.SuperTest<request.Test>;
  beforeEach(() => {
    testApp = request(app);
  });
  it("Should return a 400 error code when limit AND input params are missing", async done => {
    testApp.get("/places").expect(400, done);
  });

  it("Should return a 400 error code when limit param is missing", async done => {
    testApp.get("/places?input=Rosario").expect(400, done);
  });

  it("Should return a 400 error code when input param is missing", async done => {
    testApp.get("/places?limit=1").expect(400, done);
  });

  it("Responds with a 200 if both the limit and the input query params exist", async done => {
    testApp.get("/places?input=Rosario&limit=1").expect(200, done);
  });
});
