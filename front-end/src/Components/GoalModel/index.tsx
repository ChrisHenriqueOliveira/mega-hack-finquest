/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { Link } from 'react-router-dom';

import { IoIosMedal } from 'react-icons/io';
import { FiChevronRight } from 'react-icons/fi';

import ReactTooltip from 'react-tooltip';

import { Goal } from './styles';

interface Parameters {
    hasBadge: boolean;
    badgeTitle: string;
    badgeDate: string;
    badgeInfo: string;
}

const GoalModel: React.FC<Parameters> = (props) => {
    const { hasBadge, badgeTitle, badgeDate, badgeInfo } = props;

    return (
        <>
            {hasBadge ? (
                <Goal data-tip={badgeInfo} hasBadge={hasBadge}>
                    <Link to={`/badgeinfo/${badgeTitle}`}>
                        <IoIosMedal size="100%" />
                    </Link>
                </Goal>
            ) : (
                <Goal hasBadge={hasBadge}>
                    <IoIosMedal size="100%" />
                </Goal>
            )}
            <ReactTooltip place="right" type="dark" effect="solid" />
        </>
    );
};

export default GoalModel;
