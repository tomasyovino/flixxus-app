import { useState, useEffect } from "react";
import { BringByDate } from "../../../api/Request";
import Movie from "../Movie";
import { CalendarMonth } from "@mui/icons-material";
import { ComingSoonContainer, FlexContainer, MoviesContainer, Title } from "./MovieListsStyledComponents";

const IncomingMoviesList = () => {
    const [incomingMovies, setIncomingMovies] = useState([]);

    const showData = async () => {
        const response = await BringByDate(process.env.REACT_APP_FIXUS_KEY);
        const data = await response.json();
        const limit = 5;
        setIncomingMovies(data.results.slice(0, limit));
    }

    useEffect(() => {
        showData();
    }, []); // eslint-disable-next-line

    return(
        <ComingSoonContainer>
            <FlexContainer>
                <Title>
                    <CalendarMonth /> <h2>Coming Soon</h2>
                </Title>
            </FlexContainer>
            <MoviesContainer>
                {
                    incomingMovies.length > 0
                    ? incomingMovies.map((movie) => <Movie key={movie.id} {...movie} />)
                    : <span>cargando...</span>
                }
            </MoviesContainer>
        </ComingSoonContainer>
    );
}

export default IncomingMoviesList;