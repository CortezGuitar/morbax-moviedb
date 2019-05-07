import axios from 'axios';

// const stri =
//   '&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2000&primary_release_date.lte=2005&vote_count.gte=100&with_genres=10';

export default class TmdService {
  static _apiBase = `https://api.themoviedb.org/3/discover/movie`;
  static _apiKey = `5874acfd11651a28c55771624f7021f4`;

  async getResource(params, genreIds = '', page) {
    try {
      const resp = await axios.get(
        `${TmdService._apiBase}?api_key=${TmdService._apiKey}&language=en-US`,
        {
          params: {
            sort_by: params.sortBy,
            'primary_release_date.gte': params.releaseDateGte,
            'primary_release_date.lte': params.releaseDateLte,
            'vote_count.gte': params.voteCountGte,
            with_genres: genreIds,
            page: page,
            include_adult: params.includeAdult
          }
        }
      );
      return resp.data;
    } catch (err) {
      return err;
    }
  }

  getMovie = async (formData, page) => {
    const { values } = formData;
    let genreIds = '';

    if (values.genres) genreIds = values.genres.map(genre => genre.id).join();

    const resp = await this.getResource(values, genreIds, page);
    return resp;
  };
}
