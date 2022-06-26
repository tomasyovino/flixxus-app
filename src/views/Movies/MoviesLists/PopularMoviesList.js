import { useEffect } from "react";
import { BringByPopularity } from "../../../api/Request";
import { LocalFireDepartment } from "@mui/icons-material";
import { DiscoverContainer, DiscoverFlex, MoviesContainer, Title } from "./MovieListsStyledComponents";
import Movie from "../Movie";
import Loader from "../../Loader/Loader";

const PopularMoviesList = ({movies, setMovies}) => {

    const showData = async () => {
        const response = await BringByPopularity(process.env.REACT_APP_FIXUS_KEY);
        const data = await response.json();
        const limit = 10;
        setMovies(data.results.slice(0, limit));
    }

    useEffect(() => {
        showData();
    }, []); // eslint-disable-next-line

    return(
        <DiscoverContainer>
            <DiscoverFlex>
                <Title>
                    <LocalFireDepartment /> <h2>Popular Movies</h2>
                </Title>
            </DiscoverFlex>
            <MoviesContainer>
                {
                    movies.length > 0
                    ? movies.map((movie) => <Movie key={movie.id} {...movie} />)
                    : <Loader />
                }
            </MoviesContainer>
        </DiscoverContainer>
    );
    
}

export default PopularMoviesList;