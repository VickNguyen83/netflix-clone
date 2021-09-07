const API_KEY = "f36cb452dd93676b2bce11e198da1ca4";
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`, 
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, 
    fetchUpcoming: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`, 

}
export default requests

