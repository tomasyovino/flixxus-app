import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 500px;
    color: white;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
`;

const Left = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content; center
    align-items: start;
    gap: 20px;
`;

const Benefits = styled.div`
    display: flex;
    flex-direction: column;
    justify-content; center
    align-items: start;
    gap: 5px;
`;

const Span = styled.span`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Right = styled.div`
    width: 400px;
`;

const Formulary = styled.form``;

const ShortInput = styled.input`
    margin: 20px 10px 10px 0;
    width: 45%;
    height: 40px;
    border: none;
    border-radius: 6px;
    outline: none;
    padding: 10px 15px;
    font-weight: 400;
`;

const FullInput = styled.input`
    margin-bottom: 10px;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 6px;
    outline: none;
    padding: 10px 15px;
    font-weight: 400;
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Button = styled.button`
    font-size: 14px;
    font-weight: bold;
    padding: 15px 15px;
    color: white;
    background-color: #F8745C;
    border-radius: 30px;
    cursor: pointer;
`;

export {
    Container, Left, Right, Benefits, Span, 
    Formulary, ShortInput, FullInput, Flex, Button
}