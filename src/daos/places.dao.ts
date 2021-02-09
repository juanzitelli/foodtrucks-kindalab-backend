import Axios, { AxiosResponse } from "axios";
import { GoogleMapsAPIResponse, Prediction } from "../types/Prediction";

export const getAutocompletePredictions = async (input: string) => {
  try {
    type PlacesData = { data: GoogleMapsAPIResponse };

    const { data }: PlacesData = (await Axios.get(
      `${
        process.env.GOOGLE_AUTOCOMPLETE_BASE_ENDPOINT as string
      }?input=${input}&key=${process.env.GOOGLE_MAPS_API_KEY}&sessiontoken=${
        process.env.GOOGLE_AUTOCOMPLETE_SESSION_TOKEN
      }`
    )) as AxiosResponse<GoogleMapsAPIResponse>;
    return data.predictions;
  } catch (error) {
    return [];
  }
};
