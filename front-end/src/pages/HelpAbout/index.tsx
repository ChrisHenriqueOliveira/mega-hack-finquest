/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiX } from 'react-icons/fi';

import christianImage from '../../assets/membersImage/christian.png';
import giselyImage from '../../assets/membersImage/gisely.png';
import dalmoImage from '../../assets/membersImage/dalmo.png';
import humbertoImage from '../../assets/membersImage/humberto.png';
import davidImage from '../../assets/membersImage/david.png';

import Menu from '../../Components/Menu';
import Members from '../../Components/MembersModel';

import {
    Container,
    ContentContainer,
    HelpContainer,
    MembersCointainer,
} from './styles';

interface Members {
    id: number;
    name: string;
    image: string;
    area: string;
    email: string;
    linkedin: string;
    github: string;
    instagram: string;
    facebook: string;
}

const HelpAbout: React.FC = () => {
    const members: Members[] = [
        {
            id: 1,
            name: 'Christian Oliveira',
            image: christianImage,
            area: 'QA/Developer',
            email: 'o.christianh@gmail.com',
            linkedin:
                'https://www.linkedin.com/in/christian-henrique-oliveira-28070117a/',
            github: 'https://github.com/ChrisHenriqueOliveira',
            instagram: 'https://www.instagram.com/_chrishenrique_/',
            facebook: 'https://www.facebook.com/christian.h.oliveira',
        },
        {
            id: 1,
            name: 'Gisely Garcia',
            image: giselyImage,
            area: 'Data Analyst',
            email: 'gisely.gsouzaa@gmail.com',
            linkedin: 'https://www.linkedin.com/in/gisely-garcia-b66948190 ',
            github: '',
            instagram: 'https://www.instagram.com/giselygps/',
            facebook: 'https://www.facebook.com/gisely.gsouza',
        },
        {
            id: 1,
            name: 'Dalmo Fernandes',
            image: dalmoImage,
            area: 'Software Engineer',
            email: 'dalmo@outlook.com',
            linkedin: 'https://www.linkedin.com/in/dalmo-fernandes/',
            github: '',
            instagram: 'https://www.instagram.com/dalmofernandes/',
            facebook: '',
        },
        {
            id: 1,
            name: 'David Silva',
            image: davidImage,
            area: 'Developer Front-end',
            email: 'davidluis@gmail.com',
            linkedin: 'https://www.linkedin.com/in/david-luis-silva-66789969/',
            github: 'https://github.com/daviils',
            instagram: 'https://www.instagram.com/davils_/',
            facebook: 'https://www.facebook.com/davidsilvaluis',
        },
        {
            id: 1,
            name: 'Humberto Nascimento',
            image: humbertoImage,
            area: 'QA/Crowdtester',
            email: 'humberto@gmail.com',
            linkedin: 'https://www.linkedin.com/in/humbertonasc/',
            github: '',
            instagram: 'https://www.instagram.com/betonascimentojr/',
            facebook: 'https://www.facebook.com/humbertonasc.junior',
        },
    ];

    return (
        <Container>
            <Menu selectedMenu="Help" />
            <ContentContainer>
                <Link className="linkStyle" to="/dashboard">
                    <FiArrowLeft size={35} />
                </Link>
                <h1>Ajuda & Sobre</h1>
                <p>Tire suas dúvidas e conheça um pouco de nossa equipe</p>
                <>
                    <HelpContainer>
                        <p>
                            Projeto desenvolvido durante o Mega Hack 2º Edição
                            da Shawee.
                        </p>
                        <p>
                            Possui alguma dúvida sobre o projeto ou sugestões do
                            que poderiamos incluir a ele? Entre em contato com
                            algum dos integrantes abaixo e conte-nos mais.
                            Adoraríamos ouvir suas ideias!
                        </p>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/ChrisHenriqueOliveira/mega-hack-finquest"
                        >
                            Clique aqui para acessar o repositório no github!
                        </a>
                        <p>Abraços da equipe FinQuest</p>
                    </HelpContainer>
                    <h1>Membros</h1>
                    <MembersCointainer>
                        {members.map((item: Members) => (
                            <Members
                                key={item.id}
                                name={item.name}
                                image={item.image}
                                area={item.area}
                                email={item.email}
                                linkedin={item.linkedin}
                                github={item.github}
                                instagram={item.instagram}
                                facebook={item.facebook}
                            />
                        ))}
                    </MembersCointainer>
                </>
            </ContentContainer>
        </Container>
    );
};

export default HelpAbout;
