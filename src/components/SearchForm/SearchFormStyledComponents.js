import styled from "styled-components";

const SearchContainer = styled.form`
    position: relative;
    margin-top: 30px;
    padding: 5px
    display: flex;
    align-items: center;
    box-shadow: 21px 11px 61px 0px rgba(0,0,0,0.75);
`;

const Input = styled.input`
    width: 320px;
    padding: 12px 40px;
    font-size: 16px;
    outline: none;
    border: none;
    border-radius: 30px;
    box-shadow: 21px 11px 61px 0px rgba(0,0,0,0.75);
`;

export {
    SearchContainer, Input
};