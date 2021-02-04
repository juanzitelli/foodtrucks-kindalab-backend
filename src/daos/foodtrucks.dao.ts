import Axios, { AxiosResponse } from "axios";
import { FoodTruck } from "../types/FoodTruck";

export const getFoodTrucks = async () => {
  try {
    type FoodTruckData = { data: FoodTruck[] };
    const { data: foodTrucks }: FoodTruckData = (await Axios.get(
      process.env.SF_DATA_ENDPOINT as string
    )) as AxiosResponse<FoodTruck[]>;
    return foodTrucks;
  } catch (error) {
    return [];
  }
};
