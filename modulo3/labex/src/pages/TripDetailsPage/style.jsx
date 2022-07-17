import styled from 'styled-components';

export const Screen = styled.main`
    max-width: 880px;
    margin: 0 auto 20px auto;
`


export const TripDetails = styled.div`
    box-shadow: 0px 0px 15px 0px rgb(255 255 255 / 30%);
    background: #0000006f;
    color: white;
    border-radius: 14px;
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 90%;
    margin: 0 auto;
`

export const BoxDetails = styled.div`
    width: 90%;

`

export const Details = styled.div`
    max-width: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 auto;

   #date{
    font-size: 12px;
    color: #868383;
   }

`

export const ContainerCandidates = styled.div`
    height: 240px;
    overflow: auto;
`

export const ContainerApproveds = styled.div`
    height: 240px;
    overflow: auto;
`

export const BoxCandidates = styled.div`

`

export const BoxApproveds = styled.div`

`

export const ContainerTitlePage = styled.div`
    width: 90%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    color: #fff ;

`

export const EmptyDiv = styled.div`
    width: 40px;
`