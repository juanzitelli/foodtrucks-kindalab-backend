import { getClosestFoodTrucks } from "./../../services/foodtrucks.service";
require("dotenv").config();
describe("Tests on FoodTruck Service", () => {
  it("Should return 10 elements if the limit param is equal to 10", async () => {
    const limit = 10;
    const foodTrucks = await getClosestFoodTrucks(10, 10, limit);
    expect(foodTrucks.length).toEqual(limit);
  });
});
