/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { secondaryColor, neutralWhite } from '../../styles/colors';

export const Container = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${secondaryColor};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;

    img {
        height: 100%;
        width: 80px;
    }
`;

export const NavItem = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    margin: 0 5px;

    span {
        color: ${neutralWhite};
        margin-left: 5px;
        font-size: 15px;
    }
`;
