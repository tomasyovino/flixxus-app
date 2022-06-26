import styled from "styled-components";

const MovieDetails = styled.div`
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 80px;
    padding:  0 0 12px 15px;
    bottom: 0;
    left: 0;
    rigth: 0;
    display: flex;
    gap: 5px;
    align-items: end;
    color: #fff;
    background-color: black;
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;
`;

const MovieRate = styled.span`
    position: absolute;
    padding: 5px 20px;;
    top: 0;
    right: 0;
    color: #fff;
    border-radius: 6px;
    background-color: black;
    transform: translateX(105%);
    transition: transform 0.3s ease-in-out;
`;

const MovieContainer = styled.div`
    position: relative;
    width: 250px;
    height: 380px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    overflow: hidden;
    :hover ${MovieDetails}{
        transform: translateY(0%);
    }
    :hover ${MovieRate}{
        transform: translateX(0%);
    }
`;

const MovieImage = styled.img`
    width: 100%;
    height: 80%;
`;

const MovieInfo = styled.div`
    cursor: pointer;
    text-align:center;
`;

const MovieTitle = styled.h3`
    padding: 16px;
`;

const Strong = styled.strong`
    padding-bottom: 2px;
`;

const BackgroundModal = styled.div`
    position: fixed;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: rgba(255, 255, 255, 0.8);
    top: 0;
    left: 0;
`;

const Modal = styled.div`
    position: relative;
    width: 1000px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 16px 32px;
    color: black;
    background-color: white;
    border: 2px solid black;
    border-radius: 10px;
    overflow-y: scroll;
`;

const ModalMovieImage = styled.img`
    width: 70%;
    height: 350px;
    border-radius: 10px;
`;

const ModalFlex = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ModalRate = styled.h3``;

const ModalReleaseDate = styled.h4``;

const ModalOverviewFlex = styled.div`
    display: flex;
    justify-content: center;
`;

const ModalOverviewLeft = styled.div`
    width: 90%;
    text-align: left;
`;

const ModalOverview = styled.h5`
    margin-bottom: 5px;
`;

const ModalOverviewParagraph = styled.p``;

const ModalContainer = styled.div`
    width: 90%;
    margin-top: 10px;
    text-align: right;
`;

const ModalButton = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    font-size: 14px;
    font-weight: bold;
    padding: 15px 15px;
    color: white;
    background-color: #F8745C;
    border-radius: 30px;
`;

export {
    MovieContainer, MovieDetails, MovieImage,
    MovieInfo, MovieRate, MovieTitle, Strong,
    BackgroundModal, Modal, ModalMovieImage, ModalFlex, ModalRate, ModalReleaseDate, 
    ModalOverviewFlex, ModalOverviewLeft, ModalOverview, ModalOverviewParagraph, ModalContainer, ModalButton
}