import { getFoodTrucks } from "../daos/foodtrucks.dao";
import {
  computeDistanceBetween,
  LatLng,
  LatLngLike,
} from "spherical-geometry-js";
import _ from "lodash";
import { FoodTruck } from "../types/FoodTruck";

export const getClosestFoodTrucks = async (
  lat: number,
  lon: number,
  limit?: number
) => {
  const foodTrucks = await getFoodTrucks();

  const distances = foodTrucks.map(foodTruck => {
    const requestedLocationCoordinates: LatLngLike = { lat: lat, lon: lon };
    const currentFoodTruckCoordinates: LatLngLike = {
      lat: foodTruck.latitude,
      lon: foodTruck.longitude,
    };

    return {
      objectId: foodTruck.objectid,
      distance:
        computeDistanceBetween(
          requestedLocationCoordinates,
          currentFoodTruckCoordinates
        ) / 1000,
    };
  });

  const sortedDistances = _.sortBy(distances, distance => distance.distance);

  let foodTrucksToReturn: FoodTruck[] = [];

  if (!_.isUndefined(limit) && !_.isNaN(limit)) {
    for (let index = 0; index < limit; index++) {
      const distance = sortedDistances[index];
      const truck = getFoodTruckById(foodTrucks, distance.objectId);

      if (!_.isUndefined(truck) && !_.isNull(truck)) {
        foodTrucksToReturn.push(truck);
      }
    }
  } else {
    for (let index = 0; index < foodTrucks.length; index++) {
      const distance = sortedDistances[index];
      const truck = getFoodTruckById(foodTrucks, distance.objectId);

      if (!_.isUndefined(truck) && !_.isNull(truck)) {
        foodTrucksToReturn.push(truck);
      }
    }
  }

  return foodTrucksToReturn;
};

const getFoodTruckById = (array: FoodTruck[], id: string) => {
  for (let index = 0; index < array.length; index++) {
    const foodTruck = array[index];
    if (foodTruck.objectid === id) {
      return foodTruck;
    }
  }
};
