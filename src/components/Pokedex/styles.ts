/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { secondaryColor } from '../../styles/colors';

export const Container = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${secondaryColor};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
`;
