import { InfoOutlined } from "@mui/icons-material";
import { useState } from "react";
import MovieModal from "./MovieModal";
import { MovieContainer, MovieDetails, MovieImage, MovieInfo, MovieRate, MovieTitle, Strong } from "./MovieStyledComponent";

const Movie = ({ id, title, poster_path, overview, vote_average, release_date }) => {
    const IMG_API = `https://image.tmdb.org/t/p/w780`;

    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <MovieContainer key={id} onClick={() => setShowModal(true)}>
                <MovieRate>{vote_average}</MovieRate>
                <MovieImage src={IMG_API + poster_path} alt={title} />
                <MovieInfo>
                    <MovieTitle>{title}</MovieTitle>
                </MovieInfo>
                <MovieDetails>
                    <InfoOutlined />
                    <Strong>More Details</Strong>
                </MovieDetails>
            </MovieContainer>
            <MovieModal 
                isOpen={showModal} close={() => setShowModal(false)}
                IMG_API={IMG_API}
                poster_path={poster_path}
                title={title}
                vote_average={vote_average}
                release_date={release_date}
                overview={overview}
            />
        </>
    );
}

export default Movie;