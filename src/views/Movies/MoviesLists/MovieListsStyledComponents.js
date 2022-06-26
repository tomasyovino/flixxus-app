import styled from "styled-components";

const DiscoverContainer = styled.div`
    margin-top: 50px;
    text-align: center;
`;

const DiscoverFlex = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Title = styled.div`
    width: 100%;
    max-width: 1300px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
    padding: 10px;
`;

const MoviesContainer = styled.div`
    max-width: 1400px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
`;

const ComingSoonContainer = styled.div`
    margin-top: 50px;
    text-align: center;
    background-color: #E9EEF1;
    padding: 20px 0;
`;

const FlexContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export {
    DiscoverContainer, DiscoverFlex, Title, MoviesContainer,
    ComingSoonContainer, FlexContainer
}