const API_KEY = "e989df71629f7a534329eb94d05d99da";
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopular = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent}`);
    const data = await response.json();
    return data.results
};