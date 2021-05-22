const apiKey = process.env.REACT_APP_NASA_API_KEY;

const url =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos";

export const loadPhotos = async (sol: number) => {
  const response = await fetch(url + `?sol=${sol}&api_key=${apiKey}`);
  const result = await response.json();
  return result;
};
