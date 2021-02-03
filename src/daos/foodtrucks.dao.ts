import Axios, { AxiosResponse } from "axios";
import { FoodTruck } from "../types/FoodTruck";

export const getFoodTrucks = async () => {
  try {
    type FoodTruckData = { data: FoodTruck[] };
    const { data: foodTrucks }: FoodTruckData = (await Axios.get(
      "https://data.sfgov.org/resource/rqzj-sfat.json"
    )) as AxiosResponse<FoodTruck[]>;
    return foodTrucks;
  } catch (error) {
    return [];
  }
};
