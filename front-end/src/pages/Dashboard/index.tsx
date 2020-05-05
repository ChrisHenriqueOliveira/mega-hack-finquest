/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react';
import { Progress, Confirm, Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FiLogOut, FiCalendar, FiEdit, FiCheck } from 'react-icons/fi';

import Menu from '../../Components/Menu';
import ChallangeItemsModel from '../../Components/ChallangeItemsModel';

import {
    Container,
    ContentContainer,
    LevelContainer,
    BodyContainer,
    CompleteRegister,
    Form,
    RegisterForm,
} from './styles';

interface DashboardInfo {
    level: string;
    currentXp: string;
}

const Dashboard: React.FC = () => {
    const [completedRegistration, setCompletedRegistration] = useState(false);
    const [showFormCompleteRegister, setShowFormCompleteRegister] = useState(
        false,
    );

    const [showConfirm, setshowConfirm] = useState(false);
    const [hederConfirm, sethederConfirm] = useState('');
    const [contentConfirm, setcontentConfirm] = useState('');

    const dashboardInfo: DashboardInfo = {
        level: '1',
        currentXp: '80',
    };

    // metodo criado apenas para simular retorno do click, o que normalmente, caso houvesse back-end, passaria por outras validaçoes mais especificas
    function returnCompleteOrFailSimulation(type: string): void {
        sethederConfirm('Controle de missão');
        setcontentConfirm(
            'Tem certeza que deseja fazer isso? Essa ação não poderá ser desfeita para essa missão!',
        );
        setshowConfirm(true);
    }

    return (
        <Container>
            <Menu selectedMenu="Dashboard" />
            {!showFormCompleteRegister ? (
                <ContentContainer>
                    <Link className="linkStyle" to="/">
                        <FiLogOut size={35} />
                    </Link>
                    <h1>Dashboard</h1>
                    <p>
                        Confira seus desafios pendentes e concluídos do seu
                        ciclo atual!
                    </p>

                    <LevelContainer>
                        <h1>
                            Level&nbsp;
                            {dashboardInfo.level}
                        </h1>
                        <Progress
                            className="progressBar"
                            percent={dashboardInfo.currentXp}
                            color="green"
                        />
                        <p>
                            {dashboardInfo.currentXp}
                            /100
                        </p>
                    </LevelContainer>
                    <BodyContainer>
                        <div>
                            <FiCalendar size={60} />
                            <h1>Seus desafios</h1>
                        </div>

                        {completedRegistration ? (
                            <>
                                <ChallangeItemsModel
                                    view={returnCompleteOrFailSimulation}
                                />
                            </>
                        ) : (
                            <CompleteRegister>
                                <p>
                                    Parece que você ainda não completou seu
                                    cadastro. Ele nos ajuda a mapear melhor
                                    todos os nossos usuários e facilita nosso
                                    algoritmo a escolher os melhores desafios
                                    para cada um. Mas fique tranquilo, leva
                                    menos de 5 minutos e não mostraremos essas
                                    informações em lugar nenhum!
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowFormCompleteRegister(true);
                                    }}
                                >
                                    Completar cadastro agora
                                    <FiEdit size={20} />
                                </button>
                            </CompleteRegister>
                        )}
                    </BodyContainer>
                </ContentContainer>
            ) : (
                <ContentContainer>
                    <h1>Finalizar cadastro</h1>
                    <p>
                        Preencha com sinceridade! Usaremos esse formulário para
                        definir seus objetivos e desafios.
                    </p>

                    <BodyContainer>
                        <RegisterForm>
                            <Form>
                                <h1>1) Pessoais</h1>
                                <p>Mora sozinho?</p>
                                <Checkbox
                                    radio
                                    label="Sim"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                    // onChange={bat}
                                />
                                <Checkbox
                                    radio
                                    label="Não"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked
                                />
                                <p>
                                    Você paga as contas de casa ou recebe ajuda
                                    de outras pessoas?
                                </p>
                                <Checkbox
                                    radio
                                    label="Pago sozinho"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                    // onChange={bat}
                                />
                                <Checkbox
                                    radio
                                    label="Recebo ajuda"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked
                                />
                                <p>Possui cartão de crédito?</p>
                                <Checkbox
                                    radio
                                    label="Sim"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                    // onChange={bat}
                                />
                                <Checkbox
                                    radio
                                    label="Não"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked
                                />
                                <p>Qual a frequência que você usa ?</p>
                                <Checkbox
                                    radio
                                    label="Todo dia"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                />
                                <Checkbox
                                    radio
                                    label="Fim de semana"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                />
                                <Checkbox
                                    radio
                                    label="Somente em emergência/necessário"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked
                                />
                                <p>
                                    Com que frequência você chega perto ou
                                    atinge o limite do seu cartão?
                                </p>
                                <Checkbox
                                    radio
                                    label="Todo mês"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked
                                />
                                <Checkbox
                                    radio
                                    label="1x a cada 3 meses"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                />
                                <Checkbox
                                    radio
                                    label="1x por ano"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                />
                                <Checkbox
                                    radio
                                    label="Nunca"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                />
                                <h1>2) Saúde</h1>
                                <p>Possui plano de saúde?</p>
                                <Checkbox
                                    radio
                                    label="Sim"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                    // onChange={bat}
                                />
                                <Checkbox
                                    radio
                                    label="Não"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked
                                />
                                <p>Com que frequência você vai ao dentista?</p>
                                <Checkbox
                                    radio
                                    label="Todo mês"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                />
                                <Checkbox
                                    radio
                                    label="1x a cada 3 meses"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                    // onChange={bat}
                                />
                                <Checkbox
                                    radio
                                    label="1x por ano"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked
                                />
                                <Checkbox
                                    radio
                                    label="Nunca"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                />
                                <h1>3) Alimentação</h1>
                                <p>
                                    Pede comida por aplicativo com que
                                    frequência?
                                </p>
                                <Checkbox
                                    radio
                                    label="Todo dia"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                />
                                <Checkbox
                                    radio
                                    label="Fim de semana"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked
                                />
                                <Checkbox
                                    radio
                                    label="Somente em emergência/necessário"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                />
                                <h1>4) Entretenimento</h1>
                                <p>Possui TV a cabo?</p>
                                <Checkbox
                                    radio
                                    label="Sim"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                    // onChange={bat}
                                />
                                <Checkbox
                                    radio
                                    label="Não"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked
                                />
                                <p>
                                    Possui serviços de streaming?(Ex: Netflix,
                                    Amazon prime...)
                                </p>
                                <Checkbox
                                    radio
                                    label="Sim"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                    // onChange={bat}
                                />
                                <Checkbox
                                    radio
                                    label="Não"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked
                                />
                                <p>Possui celular pós - pago / Controle?</p>
                                <Checkbox
                                    radio
                                    label="Sim"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                    // onChange={bat}
                                />
                                <Checkbox
                                    radio
                                    label="Não"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked
                                />
                                <h1>5) Transporte</h1>
                                <p>Possui carro próprio?</p>
                                <Checkbox
                                    radio
                                    label="Sim"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                    // onChange={bat}
                                />
                                <Checkbox
                                    radio
                                    label="Não"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked
                                />
                                <p>
                                    Este veículo foi comprado à vista ou
                                    financiado?
                                </p>
                                <Checkbox
                                    radio
                                    label="À vista"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                    // onChange={bat}
                                />
                                <Checkbox
                                    radio
                                    label="Financiado"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked
                                />
                                <p>Possui seguro?</p>
                                <Checkbox
                                    radio
                                    label="Choose this"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                    // onChange={bat}
                                />
                                <Checkbox
                                    radio
                                    label="Choose this"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked
                                />
                                <p>
                                    Usa carro por aplicativo com que frequência?
                                </p>
                                <Checkbox
                                    radio
                                    label="Todo dia"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                    // onChange={bat}
                                />
                                <Checkbox
                                    radio
                                    label="Fim de semana"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked
                                />
                                <Checkbox
                                    radio
                                    label="Somente em emergência/necessário"
                                    name="checkboxRadioGroup"
                                    value="this"
                                    checked={false}
                                />
                            </Form>
                            <button
                                type="button"
                                onClick={() => {
                                    setCompletedRegistration(true);
                                    setShowFormCompleteRegister(false);
                                }}
                            >
                                Salvar
                                <FiCheck size={20} />
                            </button>
                        </RegisterForm>
                    </BodyContainer>
                </ContentContainer>
            )}

            <Confirm
                open={showConfirm}
                header={hederConfirm}
                content={contentConfirm}
                onCancel={(e) => setshowConfirm(false)}
                onConfirm={(e) => setshowConfirm(false)}
            />
        </Container>
    );
};

export default Dashboard;
