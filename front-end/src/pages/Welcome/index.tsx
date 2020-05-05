/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import {
    Container,
    LeftSide,
    ContentContainer,
    ButtonContainer,
} from './styles';

const Welcome: React.FC = () => {
    return (
        <Container>
            <LeftSide>
                <img src={logo} alt="logo" />
            </LeftSide>
            <ContentContainer>
                <h1>
                    <span>Economize </span>
                    dinheiro atingindo objetivos
                </h1>
                <p>
                    Comece hoje mesmo seus desafios e termine os ciclos sempre
                    no positivo!
                </p>

                <ButtonContainer>
                    <Link className="linkStyle" to="/login">
                        <button type="button" className="login">
                            ENTRAR
                        </button>
                    </Link>
                    <Link className="linkStyle" to="/register">
                        <button type="button" className="register">
                            REGISTRAR-ME
                        </button>
                    </Link>
                </ButtonContainer>
            </ContentContainer>
        </Container>
    );
};

export default Welcome;
