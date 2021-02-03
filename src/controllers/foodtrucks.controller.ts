import { RequestHandler } from "express";
import { getClosestFoodTrucks } from "../services/foodtrucks.service";
import { FoodTruck } from "../types/FoodTruck";

import _ from "lodash";

export const getFoodTrucksByCoordinates: RequestHandler = async (req, res, next) => {
  let { lat, lon, lim } = req.query;

  const latitude = !_.isUndefined(lat) ? _.toNumber(lat) : 0;
  const longitude = !_.isUndefined(lon) ? _.toNumber(lon) : 0;

  if (latitude === 0 || longitude === 0) {
    return (
      res.status(400) &&
      res.send(`'latitude' and 'longitude' must not be empty`)
    );
  }

  if (_.isNumber(lim) && _.toNumber(lim) <= 0) {
    return res.status(400) && res.send(`'limit' must be greater than 0`);
  }

  try {
    const foodTrucks: FoodTruck[] = await getClosestFoodTrucks(
      latitude,
      longitude,
      _.toNumber(lim)
    );

    const foodTrucksDTO = {
      done: true,
      list: foodTrucks,
    };

    res.json(foodTrucksDTO);
  } catch (error) {
    console.error(
      "Error trying to fetch food trucks with the given parameters ===> ",
      error
    );
    res.status(500) && next(error);
  }
};
