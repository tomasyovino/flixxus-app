const BringByPopularity = (apiKey) => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`);
};

const BringByDate = (apiKey) => {
    return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`);
};

const SearchMovies = (apiKey, searchTerm) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`);
};

const BringByRate = (apiKey, searchTerm1, searchTerm2) => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=vote_average.desc&vote_average.gte=${searchTerm1}&vote_average.lte=${searchTerm2}`);
};

export {BringByPopularity, BringByDate, SearchMovies, BringByRate};