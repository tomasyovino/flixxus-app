import { SearchMovies, BringByPopularity } from "../../api/Request";
import { Search } from "@mui/icons-material";
import { Input, SearchContainer } from "./SearchFormStyledComponents";
import "./SearchForm.css";

const SearchForm = ({setMovies, search, setSearch}) => {

    const HandleOnSubmit = (e) => {
        e.preventDefault();

        if (!search){
            return BringByPopularity(process.env.REACT_APP_FIXUS_KEY)
                    .then(response => response.json())
                    .then(data => {
                        const limit = 10;
                        setMovies(data.results.slice(0, limit));
                    })
                    .catch(error => {
                        console.log(error);
                    });
        }

        SearchMovies(process.env.REACT_APP_FIXUS_KEY, search)
        .then(response => response.json())
        .then(data => {
            const limit = 15;
            setMovies(data.results.slice(0, limit));
        })
        .catch(error => {
            console.log(error);
        });
    }

    const HandleOnChange = (e) => {
        setSearch(e.target.value)

    }

    return(
        <SearchContainer onSubmit={HandleOnSubmit}>
            <Search className="SearchIcon" />
            <Input value={search} onChange={HandleOnChange} />
        </SearchContainer>
    );
}

export default SearchForm;