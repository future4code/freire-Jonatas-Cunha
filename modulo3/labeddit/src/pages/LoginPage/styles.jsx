import styled from "styled-components";

export const Container = styled.div`



            @media(max-width: 768px) {

                header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                }

                main {
                    width: 100%;
                }

                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                min-height: 100vh;
                width: 95vw;
                margin: 0 auto;
        }
`

export const BoxInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 25px 0;
`