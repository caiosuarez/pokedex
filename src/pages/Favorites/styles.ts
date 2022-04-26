/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { secondaryColor } from '../../styles/colors';

export const Container = styled.div`
    width: 100%;
    height: calc(100% - 100px);
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 30px;
`;

export const Title = styled.h1`
    text-align: center;
    color: ${secondaryColor};
`;
