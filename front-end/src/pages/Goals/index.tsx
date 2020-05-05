/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiX } from 'react-icons/fi';
import { IoIosMedal } from 'react-icons/io';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Menu from '../../Components/Menu';
import Goal from '../../Components/GoalModel';

import {
    Container,
    ContentContainer,
    ProgressContainer,
    GoalsContainer,
    BadgeInfoContainer,
} from './styles';

interface Badge {
    id: number;
    badgeTitle: string;
    hasBadge: boolean;
    badgeDate: string;
    badgeInfo: string;
}

const Goals: React.FC = () => {
    const [showingBadgeInfo, setShowingBadgeInfo] = useState(false);

    const badges: Badge[] = [
        {
            id: 1,
            badgeTitle: 'Badge 1',
            hasBadge: true,
            badgeDate: '20/02/2020',
            badgeInfo: 'Descrição do Badge 1',
        },
        {
            id: 1,
            badgeTitle: 'Badge 2',
            hasBadge: false,
            badgeDate: '20/02/2020',
            badgeInfo: 'Descrição do Badge 2',
        },
        {
            id: 1,
            badgeTitle: 'Badge 3',
            hasBadge: false,
            badgeDate: '20/02/2020',
            badgeInfo: 'Descrição do Badge 3',
        },
        {
            id: 1,
            badgeTitle: 'Badge 4',
            hasBadge: true,
            badgeDate: '20/02/2020',
            badgeInfo: 'Descrição do Badge 4',
        },
        {
            id: 1,
            badgeTitle: 'Badge 5',
            hasBadge: false,
            badgeDate: '20/02/2020',
            badgeInfo: 'Descrição do Badge 5',
        },
        {
            id: 1,
            badgeTitle: 'Badge 6',
            hasBadge: true,
            badgeDate: '20/02/2020',
            badgeInfo: 'Descrição do Badge 6',
        },
    ];
    return (
        <Container>
            <Menu selectedMenu="Goals" />
            <ContentContainer>
                <Link className="linkStyle" to="/dashboard">
                    <FiArrowLeft size={35} />
                </Link>
                <h1>Metas & Conquistas</h1>
                <p>Confira suas metas e conquistas por período!</p>

                {!showingBadgeInfo ? (
                    <>
                        <ProgressContainer>
                            <CircularProgressbar
                                className="progressBar"
                                value={(3 * 100) / 6}
                                text="3/6"
                            />
                            <div className="infoSide">
                                <h1>Parabéns</h1>
                                <p>
                                    Continue assim e logo você terá atingido
                                    todas as conquistas!
                                </p>
                            </div>
                        </ProgressContainer>
                        <GoalsContainer>
                            {badges.map((item: Badge) => (
                                <Goal
                                    key={item.id}
                                    hasBadge={item.hasBadge}
                                    badgeTitle={item.badgeTitle}
                                    badgeDate={item.badgeDate}
                                    badgeInfo={item.badgeInfo}
                                />
                            ))}
                        </GoalsContainer>
                    </>
                ) : (
                    <BadgeInfoContainer>
                        <div className="badgeTitle">
                            <FiX size={50} />
                            <h1>Lorem ipsum</h1>
                        </div>
                        <IoIosMedal className="badge" />
                        <p>Badge adquirido em: 20/10/2020</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Morbi libero felis, luctus eu sem ut, ultrices
                            hendrerit nibh. Maecenas et neque lorem. Phasellus
                            ac est mattis mi feugiateleifend malesuada eu metus.
                            Vivamus ut luctuseros. Duis pulvinar dui dolor, ut
                            sagittis auguerhoncus eu. Sed in pharetra dolor, sed
                            elementummetus. Quisque molestie scelerisque justo
                            nonsodales. Curabitur sagittis molestie ante,
                            vitaevenenatis diam tempor eget.
                        </p>
                    </BadgeInfoContainer>
                )}
            </ContentContainer>
        </Container>
    );
};

export default Goals;
