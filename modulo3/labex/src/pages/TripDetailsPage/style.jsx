import styled from 'styled-components';

export const Screen = styled.main`
    max-width: 880px;
    margin: 0 auto 20px auto;
`


export const ContainerTripDetails = styled.div`
    box-shadow: 0px 0px 15px 0px rgb(255 255 255 / 30%);
    background: #0000006f;
    color: white;
    border-radius: 14px;
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 90%;
    margin: 0 auto;
`

export const TripDetails = styled.div`
    max-width: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 auto;

    #date{
        font-size: 12px;
        color: #d2d2d2;
    }

    #name {
        margin: 0px 0 10px 0;
    }

    #planet, #description, #duration {
        margin: 4px 0;
    }

`

export const ContainerCandidates = styled.div`
    background-color: #2b2929;
    width: 90%;
    padding: 10px 10px;
    margin: 10px auto;
    border-radius: 8px;

    p{
        margin: 0 0 5px 0;
    }

    button{
        width: 125px;
        padding: 8px 0;
        border-radius: 5px;
        border: none;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
        margin: 5px;
    }

    #approve:hover{
        background: #bbf7b7;
    }

    #recuse:hover{
        background: #f7b7b7;
    }

`

export const ContainerApproveds = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #2b2929;
    width: 90%;
    text-align: start;
    padding: 0 10px;
    margin: 10px auto;
    border-radius: 8px;

    :hover {
        transform: scale(1.05)
    }

`

export const BoxCandidates = styled.details`
    width: 90%;
    background-color: #000;
    border-radius: 14px;
    padding: 20px 0;
    margin: 10px auto;
    border: 1px solid #ffffff4a;
    cursor: pointer;
`

export const BoxApproveds = styled.details`
    width: 90%;
    background-color: #000;
    border-radius: 14px;
    padding: 20px 0;
    margin: 10px auto;
    border: 1px solid #ffffff4a;
    cursor: pointer;

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