/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Menu from '../../Components/Menu';

import { Container, ContentContainer, TipsContainer } from './styles';

interface Tips {
    id: number;
    title: string;
    description: string;
    link: string;
}

const Tips: React.FC = () => {
    const tips: Tips[] = [
        {
            id: 1,
            title: 'Compras',
            description:
                'Quer comprar alguma coisa? Já pesquisou o preço dela em outros lugares? No Zoom você pode pesquisar e comparar o preço de qualquer produto, sabendo a diferença de várias lojas e oportunidades de parcelamentos e descontos, você encontrará o seu produto desejado e não prejudicará o seu plano financeiro. Obs: Compre apenas se for algo necessário e que te trará benefícios e não gastos futuros.',
            link: 'https://www.zoom.com.br',
        },
        {
            id: 2,
            title: 'Precisa sair de casa mas necessita ir de carro?',
            description:
                'Use o aplicativo Vah, nele você pode comparar preços de serviços de táxi, saber qual está com o melhor tempo e o melhor preço',
            link: 'https://www.vahcompare.com',
        },
        {
            id: 3,
            title: 'Plano de celular',
            description:
                'Muitas pessoas se deixam levar pela conversa dos vendedores de telefonia móvel e acabam adquirindo planos de celulares em que o valor não condiz com o plano de dados ou que são planos que você não necessita. Reveja o valor e o quanto você usa da sua franquia, uma dica é o aplicativo Meu plano móvel. Ele busca ofertas mais baratas de todas as operadoras disponíveis na sua região, de acordo com o histórico de consumo.',
            link: 'https://www.meuplanomovel.com.br',
        },
    ];

    return (
        <Container>
            <Menu selectedMenu="Tips" />
            <ContentContainer>
                <Link className="linkStyle" to="/dashboard">
                    <FiArrowLeft size={35} />
                </Link>
                <h1>Dicas extras</h1>
                <p>
                    Seguindo essas dicas simples você pode economizar ainda
                    mais!
                </p>
                {tips.map((item: Tips) => (
                    <TipsContainer key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.link}
                        >
                            Clique aqui para acessar a dica!
                        </a>
                    </TipsContainer>
                ))}
            </ContentContainer>
        </Container>
    );
};

export default Tips;
