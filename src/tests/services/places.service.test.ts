import { getPlacesPredictions } from "./../../services/places.service";
require("dotenv").config();

describe("Tests on places Service", () => {
  it("Should return 10 elements if the limit param is equal to 10", async () => {
    const limit = 10;
    const input = "Rosario";
    const predictions = await getPlacesPredictions(input, limit);
    expect(predictions.length).toEqual(limit);
  });
});
