import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100px;
    background-color: white;
    color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const FlexColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
`;

const Left = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 30px;
`;

const Right = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 30px;
`;

const GraySpan = styled.span`
    font-size: 14px;
    color: gray;
`;

export {
    Container, FlexColumnContainer, Left, Right, GraySpan
}