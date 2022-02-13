import axios from 'axios';
import { exists } from '../utils/utils';

function retrieveMoviesList(params = {}, onSuccess, onError) {

  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/search/basic',
    params: {
      country: 'us',
      service: 'disney',
      type: params?.type ?? 'movie',
      genre: params?.genre ?? '18',
      page: params?.page ?? '1',
      output_language: 'en',
      language: 'en'
    },
    headers: {
      'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
      'x-rapidapi-key': 'a13038811fmshc8ce141e4dfba74p1bb83djsn908170a3a831'
    }
  };

  axios.request(options).then((response) => {
    if (exists(onSuccess)) onSuccess(response?.data);
  }).catch((error) => {
    if (exists(onError)) onError(error);
  });

}

export { retrieveMoviesList };
