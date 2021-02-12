import { RequestHandler } from "express";
import { getPlacesPredictions } from "../services/places.service";
import _ from "lodash";
import { Prediction } from "../types/Prediction";

export const getPlacesPredictionsByInput: RequestHandler = async (
  req,
  res,
  next
) => {
  const { input, limit } = req.query;

  const inputTerm = !_.isUndefined(input) ? _.toString(input) : "";
  const predictionsLimit = !_.isUndefined(limit) ? _.toNumber(limit) : 0;

  if (inputTerm === "") {
    return res.status(400) && res.send(`The 'input' term must not be empty`);
  }
  if (predictionsLimit === 0) {
    return (
      res.status(400) &&
      res.send(`Predictions limit must be a number greater than 0`)
    );
  }

  try {
    const predictions: Prediction[] = await getPlacesPredictions(
      inputTerm,
      predictionsLimit
    );
    const placesDTO = {
      done: true,
      list: predictions,
    };

    res.json(placesDTO);
  } catch (error) {
    console.error(
      "Error trying to fetch places with the given parameters ===> ",
      error
    );
    res.status(500) && next(error);
  }
};
