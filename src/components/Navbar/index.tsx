import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faStar } from '@fortawesome/free-solid-svg-icons';

import pokemonLogo from '../../assets/images/pokemon-logo.png';

import { Container, NavItem } from './styles';
import { neutralWhite } from '../../styles/colors';

function Navbar() {
    return (
        <Container>
            <img src={pokemonLogo} alt="logo" />
            <Link to="/">
                <NavItem>
                    <FontAwesomeIcon
                        fontSize="15px"
                        color={neutralWhite}
                        icon={faHouse}
                    />
                    <span>HOME</span>
                </NavItem>
            </Link>
            <Link to="/favorites">
                <NavItem>
                    <FontAwesomeIcon
                        fontSize="15px"
                        color={neutralWhite}
                        icon={faStar}
                    />
                    <span>FAVORITES</span>
                </NavItem>
            </Link>
        </Container>
    );
}

export default Navbar;
