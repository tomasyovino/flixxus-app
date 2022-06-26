import { Benefits, Container, Left, Span, Right, Formulary, ShortInput, FullInput, Flex, Button } from "./FormStyledComponents";
import { Check } from "@mui/icons-material";

const Form = () => {
    return (
        <Container>
            <Left>
                <h2>Want to annotate?</h2>
                <p>Are you a writter? Feel like you could providesome great feedback on movies. Here are the features and benefits of becoming a member.</p>
                <Benefits>
                    <Span><Check /> Discuss movies with friends</Span>
                    <Span><Check /> Build your collection of disucssed films.</Span>
                    <Span><Check /> Save your favorite movies.</Span>
                </Benefits>
            </Left>
            <Right>
                <Formulary>
                    <h2>Create Account</h2>
                    <ShortInput placeholder="First Name" />
                    <ShortInput placeholder="Last Name" />
                    <FullInput placeholder="Email Address" />
                    <FullInput placeholder="Password" type={"password"} />
                    <Flex>
                        <Span>Already have an account? Sign In</Span>
                        <Button>Create Account</Button>
                    </Flex>
                </Formulary>
            </Right>
        </Container>
    );
}

export default Form;