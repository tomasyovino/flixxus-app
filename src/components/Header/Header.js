import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import StarsRating from "../StarsRating/StarsRating";
import { Button, Center, Flex, HeaderContainer, Span, Title, SubSubtitle, Subtitle, Top, BottomLeft, StarFlex } from "./HeaderStyledComponents";

const Header = ({movies, setMovies, search, setSearch}) => {
    return(
        <HeaderContainer>
            <Top>
                <Flex>
                    <Title>Flixus</Title>
                    <Span className="Browse">Browse +</Span>
                </Flex>
                <Flex>
                    <Span>Login</Span>
                    <Button>Sign Up</Button>
                </Flex>
            </Top>
            <Center>
                <Subtitle>Your favourite movies. Explained.</Subtitle>
                <SubSubtitle>Figure out what happened. Then find out why.</SubSubtitle>
                <SearchForm movies={movies} setMovies={setMovies} search={search} setSearch={setSearch} />
            </Center>
            {/* <BottomLeft>
                <StarFlex>
                    <StarsRating setMovies={setMovies} />
                </StarFlex>
            </BottomLeft> */}
        </HeaderContainer>
    );
}

export default Header;