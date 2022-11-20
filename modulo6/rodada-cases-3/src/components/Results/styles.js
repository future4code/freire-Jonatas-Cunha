import styled from "styled-components";

export const ResultsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;

    height: 100vh;
    width: 50%;
    flex-grow: 2;

    @media (max-width: 900px) {
        width: 100%;
        flex-grow: 0;
        height: 100%;
    };
`;

export const ResultBox = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
`;

export const Boll = styled.div`
    background-color: #FFFFFF;
    border-radius: 50%;
    width: 100px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;

    @media (max-width: 900px) {
        width: 80px;
        height: 80px;
    }

`;
