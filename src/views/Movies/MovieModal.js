import { Close } from "@mui/icons-material";
import { BackgroundModal, Modal, ModalButton, ModalContainer, ModalFlex, ModalMovieImage, ModalOverview, ModalOverviewFlex, ModalOverviewLeft, ModalOverviewParagraph, ModalRate, ModalReleaseDate } from "./MovieStyledComponent";

const MovieModal = ({isOpen, close, title, poster_path, vote_average, release_date, overview, IMG_API}) => {

    if(!isOpen) return null;

    return(
        <BackgroundModal>
            <Modal>
                <Close onClick={close} style={{cursor: "pointer", position: "absolute", top: "5px", right: "25px"}} />
                <ModalMovieImage src={IMG_API + poster_path} alt={title} />
                <ModalFlex>
                    <ModalRate>IMDb: {vote_average}</ModalRate>
                    <ModalReleaseDate>{release_date}</ModalReleaseDate>
                </ModalFlex>
                <ModalOverviewFlex>
                    <ModalOverviewLeft>
                        <ModalOverview>Overview</ModalOverview>
                        <ModalOverviewParagraph>{overview}</ModalOverviewParagraph>
                    </ModalOverviewLeft>
                </ModalOverviewFlex>
                <ModalContainer>
                    <ModalButton onClick={close}>Close</ModalButton>
                </ModalContainer>
            </Modal>
        </BackgroundModal>
    );
}

export default MovieModal;