/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiArrowLeft, FiX } from 'react-icons/fi';
import { IoIosMedal } from 'react-icons/io';

import Menu from '../../Components/Menu';

import { Container, ContentContainer, BadgeInfoContainer } from './styles';

interface BadgeParams {
    badge: string;
}

interface Badge {
    id: number;
    date: string;
    info: string;
}

const BadgeInfo: React.FC<Badge> = (props) => {
    const { id, date, info } = props;

    const { params } = useRouteMatch<BadgeParams>();

    return (
        <Container>
            <Menu selectedMenu="Goals" />
            <ContentContainer>
                <Link className="linkStyle" to="/dashboard">
                    <FiArrowLeft size={35} />
                </Link>
                <h1>Metas & Conquistas</h1>
                <p>Confira suas metas e conquistas por período!</p>

                <BadgeInfoContainer>
                    <div className="badgeTitle">
                        <Link to="/goals">
                            <FiX size={40} />
                        </Link>
                        <h1>{params.badge}</h1>
                    </div>
                    <IoIosMedal className="badge" />
                    <p>Badge adquirido em: 20/10/2020</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi libero felis, luctus eu sem ut, ultrices hendrerit
                        nibh. Maecenas et neque lorem. Phasellus ac est mattis
                        mi feugiateleifend malesuada eu metus. Vivamus ut
                        luctuseros. Duis pulvinar dui dolor, ut sagittis
                        auguerhoncus eu. Sed in pharetra dolor, sed
                        elementummetus. Quisque molestie scelerisque justo
                        nonsodales. Curabitur sagittis molestie ante,
                        vitaevenenatis diam tempor eget.
                    </p>
                </BadgeInfoContainer>
            </ContentContainer>
        </Container>
    );
};

export default BadgeInfo;
