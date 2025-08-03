const API_KEY = "1a3802da02a32f2cad0c6895bb3a6375";
const BASE_URL = "https://api.themoviedb.org/3";
const BASE_URL_2 = "https://api.themoviedb.org/3/discover/movie?api_key=1a3802da02a32f2cad0c6895bb3a6375&with_original_language=hi";
const BASE_URL_3 = "https://api.themoviedb.org/3/discover/movie?api_key=1a3802da02a32f2cad0c6895bb3a6375&with_original_language=en";
const URL_FOR_ALL_MOVIE = "https://api.themoviedb.org/3/discover/movie?api_key=1a3802da02a32f2cad0c6895bb3a6375";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    console.log(response);
    const data = await response.json();
    return data.results;
};

// export const getPopularMovies = async () => {
//     const response = await fetch(`${BASE_URL_2}/movie/popular?api_key=${API_KEY}`);
//     const data = await response.json();
//     return data.results;
// };

// export const searchMovies = async (query) => {
//     const response = await fetch(`${BASE_URL_2}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
//     console.log(response);
//     const data = await response.json();
//     return data.results;
// };

// const API_KEY = "1a3802da02a32f2cad0c6895bb3a6375";
// const BASE_URL = "https://api.themoviedb.org/3";

// // ✅ For popular Hindi movies
// export const getPopularMovies = async () => {
//     const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=hi&sort_by=popularity.desc`);
//     const data = await response.json();
//     return data.results;
// };

// // ✅ For searching Hindi movies
// export const searchMovies = async (query) => {
//     const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&with_original_language=hi`);
//     const data = await response.json();
//     return data.results;
// };
