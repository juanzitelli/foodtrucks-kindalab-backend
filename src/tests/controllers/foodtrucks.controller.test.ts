import express from "express";
import request from "supertest";
import { app } from "./../../../index";

describe("Tests on FoodTrucks controller", function () {
  it("Responds with a 400 if the coordinates are missing", function (done) {
    request(app).get("/food-trucks").expect(400, done);
  });

  it("Responds with a 200 if the coordinates exist", function (done) {
    request(app)
      .get("/food-trucks?lat=37.72378063123583&lon=-122.43611610497405")
      .expect(200, done);
  });
});
