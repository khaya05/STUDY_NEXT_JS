import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_Key,
});

const getUrlForCoffeeStores = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};

const getListOfCoffeeStorePhotos = async () => {
  const photos = await unsplash.search.getPhotos({
    query: 'coffee shop',
    page: 1,
    perPage: 1,
  });

  const unsplashResults = photos.response.results;
  return unsplashResults.map((result) => result.urls['small']);
};

export const fetchCoffeeStores = async () => {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: process.env.FOURSQUARE_API_KEY,
    },
  };

  const response = await fetch(
    getUrlForCoffeeStores(
      '43.653833032607096%2C-79.37896808855945',
      'coffee',
      6
    ),
    options
  );
  const data = await response.json();
  return data.results.map((result, idx) => {
    const neighborhood = location.neighborhood;
    return {
      id: result.fsq_id,
      name: results.name,
      address: location.address,
      neighborhood: neighborhood.length > 0 ? neighborhood[0] : '',
      imgUrl: photos[idx],
    };
  });
};
