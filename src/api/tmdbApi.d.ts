declare module '../api/tmdbApi.js' {
  const category: {
    movie: string;
    tv: string;
  };

  const movieType: {
    upcoming: string;
    popular: string;
    top_rated: string;
  };

  const tvType: {
    popular: string;
    top_rated: string;
    on_the_air: string;
  };

  interface TmdbApi {
    getMoviesList: (type: string, params: any) => Promise<any>;
    getTvList: (type: string, params: any) => Promise<any>;
    getVideos: (cate: string, id: number) => Promise<any>;
    search: (cate: string, params: any) => Promise<any>;
    detail: (cate: string, id: number, params: any) => Promise<any>;
    credits: (cate: string, id: number) => Promise<any>;
    similar: (cate: string, id: number) => Promise<any>;
  }

  const tmdbApi: TmdbApi;

  export default tmdbApi;
}
