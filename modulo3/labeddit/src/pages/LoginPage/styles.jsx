import styled from "styled-components";
import { PrimaryColor, SecondaryTextColor, TertiaryColor, PrimaryTitleColor } from "../../constants/Colors";

export const BackGroundDeskTop = styled.div`
 @media(min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: ${TertiaryColor};
 }
`

export const Container = styled.div`
    @media(min-width: 768px) {
       background-color: ${PrimaryColor};
       padding: 45px;
       border-radius: 20px 100px;
       box-shadow: 0px 0px 15px 0.3px ${SecondaryTextColor};
    }
    
    header {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin-bottom: 15px;

            h1 {
                color: ${PrimaryTitleColor};
                margin: 10px 0 3px;
            }
        }

    @media(max-width: 768px) {

        main {
            width: 100%;
        }

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 100vh;
        padding: 0 16px;
        margin: 0 auto;
}
`

export const BoxInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 15px 0 15px;
`