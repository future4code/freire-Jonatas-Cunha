import styled from "styled-components";

export const Container = styled.div`
    height: 95%;
    overflow: auto;
    margin: 0 auto;
    box-sizing: border-box;
`


export const ContainerMatch = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 23px auto;
    border-radius: 40px 20px 20px 40px;
    font-weight: 500;
    background: #ff7e8b;
    height: 60px;
    width: 90%;

    :hover{
        box-shadow: 0px 0px 4px 1px #0000005e;
    }

`

export const BoxImg = styled.div`
    position: relative;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: 2px solid rgb(255 0 54);


   ::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background: url(${props => props.src}) no-repeat center;
        background-size: cover;
        filter: blur(4px);
        z-index: 1;
   }
   
   img{
         width: 100%;
         z-index: 2;
    }
`


// STYLES NAO HA MATCHES

export const ContainerNaoHaMatches = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60%;
    color: #BCBBC0;
`