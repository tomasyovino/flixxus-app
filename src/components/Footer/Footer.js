import { Container, FlexColumnContainer, GraySpan, Left, Right } from "./FooterStyledComponents";

const Footer = () => {
    return(
        <Container>
            <FlexColumnContainer>
                <Left>
                    <strong>About</strong>
                    <strong>Jobs</strong>
                    <strong>Press</strong>
                    <strong>News</strong>
                    <strong>Gift</strong>
                </Left>
                <Left>
                    <GraySpan>Legal</GraySpan>
                    <GraySpan>Cookies</GraySpan>
                    <GraySpan>AdChoices</GraySpan>
                </Left>
            </FlexColumnContainer>
            <FlexColumnContainer>
                <Right>
                    <strong>Facebook</strong>
                    <strong>Twitter</strong>
                </Right>
                <Right>
                    <GraySpan>© 2007 - 2014 MovieRountable</GraySpan>
                </Right>
            </FlexColumnContainer>
        </Container>
    );
}

export default Footer;