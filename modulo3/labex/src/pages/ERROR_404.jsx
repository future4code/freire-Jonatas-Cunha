import styled from "styled-components";

function ERROR_404() {

const StyledError404 = styled.div`
    max-width: 880px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;

    color : #fff;

    h1 {
        font-size: 6.5rem;
        margin-bottom: 5px;
    }

    p {
        font-size: 2.5rem;
        margin-top: 0;
    }

`

    return (
        <StyledError404>
            <h1>404</h1>
            <p>Page Not Found</p>
        </StyledError404>
    )

}

export default ERROR_404;