import { Star } from "@mui/icons-material";
import { useState } from "react";
import { BringByPopularity, BringByRate } from "../../api/Request";
import { Container, Flex, Span } from "./StarsRatingStyledComponents";

const StarsRating = ({setMovies}) => {

    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    const colors = {
        yellow: "yellow",
        white: "#fff"
    }

    const handleClick = (value) => {

        if((value + 1) === currentValue) {
          return setCurrentValue(0);
        }

        setCurrentValue(value + 1);
    };

    const handleMouseOver = (value) => {
        setHoverValue(value);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    };

    return(
        <Container>
            <Span>Filter by classification</Span>
            <Flex>
            {
                stars.map((_, index) => {
                    return(<Star 
                        key={index}
                        style={{
                            cursor:"pointer", 
                            color: (hoverValue || currentValue) > index
                            ? colors.yellow
                            : colors.white
                        }}
                        onClick={() => handleClick(index)} 
                        onMouseOver={() => handleMouseOver(index + 1)} 
                        onMouseLeave={() => handleMouseLeave()} />)
                })
            }
            </Flex>
        </Container>
    );
}

export default StarsRating;




