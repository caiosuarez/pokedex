/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
    primaryColor,
    secondaryColor,
    neutralWhite,
} from '../../styles/colors';

export const Card = styled.div`
    width: 300px;
    height: 370px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
    background-color: transparent;
    border: 5px solid ${primaryColor};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    overflow: hidden;
`;

export const CardHeader = styled.div`
    background: linear-gradient(45deg, ${primaryColor}, #00000000);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 0 10px;
    position: relative;

    h1 {
        color: ${secondaryColor};
        font-size: 25px;
        margin-top: 5px;
    }

    img {
        margin-bottom: 20px;
    }
`;

export const FavoriteButton = styled.button`
    position: absolute;
    top: 5px;
    left: 5px;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        .favorite-icon {
            color: ${secondaryColor};
        }
    }
`;

export const TypeBadge = styled.div`
    width: 70px;
    height: 40px;
    background-color: ${(props) => props.color};
    color: ${neutralWhite};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -20px;
`;

export const CardBody = styled.div`
    width: 100%;
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
`;

export const Statline = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 5px 0;

    span:first-child {
        color: ${primaryColor};
    }

    span {
        color: ${secondaryColor};
        font-size: 14px;
        font-weight: 600;
    }
`;
