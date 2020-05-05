/* eslint-disable react/jsx-indent-props */
import React from 'react';

import {
    FiMail,
    FiLinkedin,
    FiGithub,
    FiInstagram,
    FiFacebook,
} from 'react-icons/fi';

import { Divider, Header, Icon, Table } from 'semantic-ui-react';

import { Member } from './styles';

interface Parameters {
    name: string;
    image: string;
    area: string;
    email: string;
    linkedin: string;
    github: string;
    instagram: string;
    facebook: string;
}

const MembersModel: React.FC<Parameters> = (props) => {
    const {
        name,
        image,
        area,
        email,
        linkedin,
        github,
        instagram,
        facebook,
    } = props;

    return (
        <>
            <Member>
                <div className="header">
                    <img src={image} alt="Profile" />
                    <h1>{name}</h1>
                    <h2>{area}</h2>
                    <Divider className="divider" />
                </div>
                <div className="social">
                    {email && (
                        <button type="button">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`mailto:${email}?Subject=Finquest`}
                                className="button"
                            >
                                <FiMail />
                            </a>
                        </button>
                    )}
                    {linkedin && (
                        <button type="button">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={linkedin}
                                className="button"
                            >
                                <FiLinkedin />
                            </a>
                        </button>
                    )}
                    {github && (
                        <button type="button">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={github}
                                className="button"
                            >
                                <FiGithub />
                            </a>
                        </button>
                    )}
                    {instagram && (
                        <button type="button">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={instagram}
                                className="button"
                            >
                                <FiInstagram />
                            </a>
                        </button>
                    )}
                    {facebook && (
                        <button type="button">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={facebook}
                                className="button"
                            >
                                <FiFacebook />
                            </a>
                        </button>
                    )}
                </div>
            </Member>
        </>
    );
};

export default MembersModel;
