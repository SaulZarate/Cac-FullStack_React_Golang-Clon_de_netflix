import axios from "axios";
import { apiQuality, tmdb } from "./theMoviDB.config";

export const tryGetPopularMovies = async (page = 1, lang="es") => {
    try {
        const res = await axios(
            `${tmdb.urlBase}${tmdb.entity.popularMovies}${tmdb.apiKey}${tmdb.language[lang]}${tmdb.pagination}${page}`
        );
          return res.data.results;
    } catch (error) {
        return [];
    }
};
  
export const apiBuilder = {
    tryGet: async (entity, lang = "es", page = 1) => {
        const URL = `${tmdb.urlBase}${tmdb.entity[entity]}${tmdb.apiKey}${tmdb.language[lang]}${tmdb.pagination}${page}`;
        try {
            const res = await axios(URL);
            return res.data.results;
        } catch (error) {
            return [];
        }
    },
    tryGetById: async (entity, id, lang = "es") => {
        const URL = `${tmdb.urlBase}${tmdb.entity[entity]}/${id}${tmdb.apiKey}${tmdb.language[lang]}`;
        try {
            const res = await axios(URL);
            return res;
        } catch (error) {
            return [];
        }
    },
    tryGetImg: (path, quality = apiQuality.posterLarge) => {
        return `${tmdb.imageUrl}${tmdb.quality[quality]}${path}`;
    },
};