import styled from 'styled-components';
import { SecondaryColor } from '../../constants/Colors';

export const HeaderContainer = styled.header`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 65px;
    align-items: center;
    justify-items: center;
    background-color: ${SecondaryColor};

    img {
        width: 45px;
        height: 45px;
    }

`