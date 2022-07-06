import styled from "styled-components";

export const Container = styled.div`
    height: 95%;
    overflow: auto;
`


export const ContainerMatch = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 15px 0;
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

   ::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background: url(${props => props.src}) no-repeat center;
        background-size: cover;
        filter: blur(10px);
        z-index: -1;
   }
   
   img{
         width: 100%;
    }
`