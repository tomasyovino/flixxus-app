import styled from "styled-components";

const HeaderContainer = styled.header`
    position: relative;
    width: 100%;
    height: 400px;
    padding: 0 200px;
    background-color: black;
`;

const Flex = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    gap: 20px;
`;


const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
`;

const Center = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const Span = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: white;
`;

const Title = styled.h1`
    font-size: 26px;
    font-weight: bolder;
    color: white;
`;

const Subtitle = styled.h2`
    font-size: 34px;
    font-weight: bolder;
    color: white;
`;

const SubSubtitle = styled.h3`
    font-size: 20px;
    color: white;
    font-weight: lighter;
`;

const Button = styled.button`
    font-size: 14px;
    font-weight: bold;
    padding: 10px 15px;
    color: #F8745C;
    background-color: transparent;
    border: solid 1px #F8745C;
    border-radius: 30px;
    cursor: pointer;
`;

const StarFlex = styled.div`
    display: flex;
`;

const BottomLeft = styled.div`
    position: absolute;
    bottom: 20px;
    left: 100px;
`;

export {
    HeaderContainer, Flex, Top, Center,
    Span, Title, Subtitle, SubSubtitle, Button,
    StarFlex, BottomLeft
};