/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { Link } from 'react-router-dom';
import { FiGrid, FiStar, FiHelpCircle, FiAward } from 'react-icons/fi';

import ReactTooltip from 'react-tooltip';

import profile from '../../assets/profileimg.png';
import logo from '../../assets/menulogo.png';

import { Container, ContentContainer, MenuOptions, MenuButton } from './styles';

interface Parameters {
    selectedMenu: string;
}

const Menu: React.FC<Parameters> = (props) => {
    const { selectedMenu } = props;

    return (
        <Container>
            <ContentContainer>
                <Link className="linkLogo" to="/dashboard">
                    <img className="logo" src={logo} alt={logo} />
                </Link>
                <MenuOptions>
                    <ul>
                        <MenuButton
                            selectedMenu={selectedMenu}
                            actualMenu="Dashboard"
                        >
                            <Link
                                className="linkStyle"
                                data-tip="Dashboard"
                                to="/dashboard"
                            >
                                <FiGrid size={36} />
                            </Link>
                        </MenuButton>
                        <MenuButton
                            selectedMenu={selectedMenu}
                            actualMenu="Tips"
                        >
                            <Link
                                className="linkStyle"
                                data-tip="Dicas"
                                to="/tips"
                            >
                                <FiStar size={36} />
                            </Link>
                        </MenuButton>
                        <MenuButton
                            selectedMenu={selectedMenu}
                            actualMenu="Goals"
                        >
                            <Link
                                className="linkStyle"
                                data-tip="Conquistas"
                                to="/goals"
                            >
                                <FiAward size={36} />
                            </Link>
                        </MenuButton>
                        <MenuButton
                            selectedMenu={selectedMenu}
                            actualMenu="Help"
                        >
                            <Link
                                className="linkStyle"
                                data-tip="Ajuda / Sobre nós"
                                to="/help"
                            >
                                <FiHelpCircle size={36} />
                            </Link>
                        </MenuButton>
                    </ul>
                </MenuOptions>
                <Link className="linkStyle" data-tip="Perfil" to="/profile">
                    <img src={profile} alt="Profile" />
                </Link>
                <ReactTooltip
                    className="toolTip"
                    place="right"
                    type="dark"
                    effect="solid"
                />
            </ContentContainer>
        </Container>
    );
};

export default Menu;
