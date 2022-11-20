import styled from "styled-components";

export const Siedbar = styled.div`
    position: relative;
    z-index: 2;
    max-width: 100vw;
    flex-grow: 1;


    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 60vh;
        overflow: hidden;
        flex-grow: 0;
    }

`;

export const Svg = styled.svg`
    position: absolute;
    height: 100vh;
    z-index: -1;

    @media (max-width: 900px) {
        transform: rotate(90deg);
        bottom: -100px;
        width: 100vw;
        height: 130vh;
    }

    @media (max-width: 690px) {
        height: 100vh;
    };
`;

export const SiedbarContent = styled.div`
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 20px;

    @media (max-width: 900px) {
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
    }



`;

export const Select = styled.select`
    width: 215px;
    padding: 10px;
    border-radius: 10px;

    border: none;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
`

export const BoxTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;

    color: #FFFFFF;
`;


export const BoxContest = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 900px) {
        align-items: center;
    }


`;

export const H2 = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.135em;

    color: #FFFFFF;
`;

export const H3 = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    color: #FFFFFF;
`;