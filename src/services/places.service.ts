import { getAutocompletePredictions } from "../daos/places.dao";

import _ from "lodash";
import { Prediction } from "../types/Prediction";

export const getPlacesPredictions = async (input: string, limit: number) => {
  const data: Prediction[] = await getAutocompletePredictions(input);
  const predictions = [];
  for (let index = 0; index < limit; index++) {
    const prediction = data[index];
    predictions.push(prediction);
  }
  return predictions;
};
