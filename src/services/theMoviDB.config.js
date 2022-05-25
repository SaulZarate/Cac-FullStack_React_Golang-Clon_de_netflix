export const tmdb = {
    urlBase: "https://api.themoviedb.org/3",
    apiKey: '?api_key=12b184c434d36b3a15053e273252be65',
    entity: {
        topRatedMovies: "/movie/top_rated",
        topRatedTv: "/tv/top_rated",
        popularMovies: "/movie/popular",
        popularTv: "/tv/popular",
        movieById: "/movie/",
        tvById: "/tv/",
    },
    language: {
      en: "&language=en-US",
      es: "&language=es-ES",
    },
    pagination: "&page=",
    imageUrl: "https://image.tmdb.org/t/p",
    quality: {
        posterSmall: "/w200",
        posterMedium: "/w300",
        posterLarge: "/w500",
        backdropSmall: "/w300",
        backdropMedium: "/w780",
        backdropLarge: "/w1280",
    }
    ,
};

export const apiQuality = {
    posterSmall: "posterSmall",
    posterMedium: "posterMedium",
    posterLarge: "posterLarge",
    backdropSmall: "backdropSmall",
    backdropMedium: "backdropMedium",
    backdropLarge: "backdropLarge",
};

export const apiEntity = {
    topRatedMovies: "topRatedMovies",
    topRatedTv: "topRatedTv",
    popularMovies: "popularMovies",
    popularTv: "popularTv",
    movieById: "movieById",
    tvById: "tvById",
};
  
export const apiLanguage = {
    english: "en",
    spanish: "es",
};