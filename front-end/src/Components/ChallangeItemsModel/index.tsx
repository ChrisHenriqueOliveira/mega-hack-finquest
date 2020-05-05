/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react';

import { FiCheck, FiX, FiChevronDown, FiLock } from 'react-icons/fi';

import { ChallangesContainer, ChallangeItems, ChallangeInfo } from './styles';

interface Item {
    id: string;
    title: string;
    icon: string;
    status: string;
    description: string;
    tip: string;
    site: string;
}

interface Parameters {
    view: any;
}

const ChallangeItemsModel: React.FC<Parameters> = (props) => {
    const { view } = props;
    const [infoEnabled, setInfoEnabled] = useState('');

    const items: Item[] = [
        {
            id: '01',
            title: 'Missão 1 - Organize-se',
            icon: 'Done',
            status: 'Done',
            description:
                'Organize os vencimentos de suas contas em um local único.',
            tip:
                'Dica importante: você pode utilizar aplicativos que auxiliam a listagem por tópicos ou planilhas para executar a tarefa, como por exemplo Wunderlist.',
            site: 'https://www.wunderlist.com/',
        },
        {
            id: '02',
            title: 'Missão 2 - Compras no Supermercado - 80xp',
            icon: 'Fail',
            status: 'Fail',
            description:
                '   Agora que você já planejou o vencimento de suas faturas, está na hora de planejar as compras de mercado. Veja o que está faltando na sua casa e faça uma listinha com apenas os produtos de que está faltando e que precisará. Para o próximo desafio, se você é daquelas pessoas que compram o almoço/lanche na rua do trabalho ou faculdade, a dica de hoje é fazer esses lanches em casa. Veja o que você prefere comer, seja um pão com presunto ou um lanche mais elaborado e faça a lista dos itens necessários. Não vá ao mercado com fome! É engraçado mas é verdade. Se você for com fome as compras, comprará mais do que o necessário.',
            tip:
                '  Dica importante: No site ofertasdesupermercados você pode ver as promoções dos mercados e ver qual está com a melhor oferta para os produtos que você precisa.',
            site: 'https://www.ofertasdesupermercados.com.br/',
        },
        {
            id: '03',
            title: 'Missão 3 - Cuide da sua saúde - 80xp',
            icon: 'Current',
            status: 'Current',
            description:
                'Ter saúde é o essencial para ir atrás de todos os outros objetivos. Quando você não faz um exercício físico por muito tempo ou não cuida da sua saúde, chega um momento em que você terá muitos gastos com remédios e exames. Cuide da sua saúde hoje para que ela não te traga grandes gastos futuramente!.',
            tip:
                'Dica importante: Com o aplicativo MyFitnessPal você tem muitas opções de alimentos e receitas de acordo com a meta que você estabelecer nele',
            site: 'https://www.myfitnesspal.com/pt/',
        },
        {
            id: '04',
            title: 'Complete a missão anterior para desbloquear',
            icon: 'Locked',
            status: 'Locked',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
            tip: '',
            site: 'https://www.ofertasdesupermercados.com.br/ ',
        },
        // {
        //     id: '05',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '06',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '07',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '08',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '09',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '10',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '11',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '12',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '13',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '14',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '15',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '16',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '17',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '18',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '19',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '20',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '21',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '22',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '23',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '24',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '25',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '26',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '27',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '28',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '29',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
        // {
        //     id: '30',
        //     title: 'Complete a missão anterior para desbloquear',
        //     icon: 'Locked',
        //     status: 'Locked',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, luctus eu sem ut, ultrices hendrerit nibh. Maecenas et neque lorem. Phasellus ac est mattis mi feugiateleifend malesuada eu metus. Vivamus ut luctuseros. Duis pulvinar dui dolor, ut sagittis auguerhoncus eu. Sed in pharetra dolor, sed elementummetus. Quisque molestie scelerisque justo nonsodales. Curabitur sagittis molestie ante, vitaevenenatis diam tempor eget.',
        // },
    ];

    function completeTask(type: string): string {
        return view(type);
    }

    function returnIcon({ icon }: Item): JSX.Element {
        if (icon === 'Done') {
            return <FiCheck size={30} />;
        }
        if (icon === 'Fail') {
            return <FiX size={30} />;
        }
        if (icon === 'Current') {
            return <FiChevronDown size={30} />;
        }
        return <FiLock size={30} />;
    }

    function handleShowInformation({ id }: Item): void {
        return infoEnabled === '' ? setInfoEnabled(id) : setInfoEnabled('');
    }

    return (
        <>
            <ChallangesContainer>
                {items.map((item: Item) => (
                    <>
                        <ChallangeItems
                            key={item.id}
                            onClick={() =>
                                item.status !== 'Locked' &&
                                handleShowInformation(item)}
                            status={item.status}
                        >
                            <h2>{item.id}</h2>
                            <h3>{item.title}</h3>
                            {returnIcon(item)}
                        </ChallangeItems>
                        {infoEnabled === item.id ? (
                            <ChallangeInfo
                                key={item.id + 10}
                                status={item.status}
                            >
                                <>
                                    <h2>{item.description}</h2>
                                    <h2>{item.tip}</h2>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={item.site}
                                    >
                                        Clique aqui para acessar a dica!
                                    </a>
                                    {item.status === 'Current' && (
                                        <div className="buttonsContainer">
                                            <button
                                                onClick={(e) =>
                                                    completeTask('complete')
                                                }
                                                type="button"
                                            >
                                                Completar
                                            </button>
                                            <button
                                                onClick={(e) =>
                                                    completeTask('fail')
                                                }
                                                type="button"
                                            >
                                                Falhar
                                            </button>
                                        </div>
                                    )}
                                </>
                            </ChallangeInfo>
                        ) : null}
                    </>
                ))}
            </ChallangesContainer>
        </>
    );
};

export default ChallangeItemsModel;
