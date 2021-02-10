import express from "express";
import request from "supertest";
import { app } from "../../../app";

require("dotenv").config();

describe("Tests on FoodTrucks controller", () => {
  let testApp: request.SuperTest<request.Test>;
  beforeEach(() => {
    testApp = request(app);
  });
  it("Should return 400 when lat and lng query params are missing", async done => {
    testApp.get("/food-trucks").expect(400, done);
  });

  it("Should return 200 when lat and lng query params exist", async done => {
    const lat = 37.72378063123583;
    const lon = -122.43611610497405;
    testApp.get(`/food-trucks?lat=${lat}&lon=${lon}`).expect(200, done);
  });
});
