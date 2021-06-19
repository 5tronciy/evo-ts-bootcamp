import { FetchPhoto } from "../app/reducers/mars";

const apiKey = process.env.REACT_APP_NASA_API_KEY;

interface ApiResponse {
  photos: FetchPhoto[];
}

const url =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos";

export const loadPhotos = async (sol: number): Promise<ApiResponse> => {
  const response = await fetch(url + `?sol=${sol}&api_key=${apiKey}`);
  return response.json();
};
