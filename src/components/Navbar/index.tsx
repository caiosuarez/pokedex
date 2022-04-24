import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faStar } from '@fortawesome/free-solid-svg-icons';

import pokemonLogo from '../../assets/images/pokemon-logo.png';

import { Container, NavItem } from './styles';
import { textColor } from '../../styles/colors';

function Navbar() {
    return (
        <Container>
            <img src={pokemonLogo} alt="logo" />
            <NavItem>
                <FontAwesomeIcon
                    fontSize="15px"
                    color={textColor}
                    icon={faHouse}
                />
                <span>HOME</span>
            </NavItem>
            <NavItem>
                <FontAwesomeIcon
                    fontSize="15px"
                    color={textColor}
                    icon={faStar}
                />
                <span>FAVORITES</span>
            </NavItem>
        </Container>
    );
}

export default Navbar;
