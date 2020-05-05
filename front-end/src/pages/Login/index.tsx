/* eslint-disable react/jsx-indent-props */
import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Redirect } from 'react-router';

import logo from '../../assets/logo.png';

import { Container, LeftSide, ContentContainer, Form } from './styles';

const Login: React.FC = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(false);
    const [redirect, setRedirect] = useState(false);
    async function handleLogin(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();

        if (name === '' || password === '') {
            setHasError(true);
        } else {
            setHasError(false);
            setRedirect(true);
        }
    }

    return redirect ? (
        <Redirect push to="/dashboard" />
    ) : (
        <Container>
            <LeftSide>
                <img src={logo} alt="logo" />
            </LeftSide>
            <ContentContainer>
                <Link className="linkStyle" to="/">
                    <FiArrowLeft size={35} />
                </Link>
                <h1>
                    <span>Entre </span>
                    com sua conta
                </h1>
                <p>
                    Não possui uma conta? &zwnj;
                    <Link className="linkStyle" to="/register">
                        <span>Clique aqui para se registrar!</span>
                    </Link>
                </p>
                <Form onSubmit={handleLogin}>
                    {hasError && <span>Nome e/ou senha incorretos</span>}
                    <input
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nome"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Senha"
                        type="password"
                    />
                    <button type="submit">Entrar</button>
                </Form>
            </ContentContainer>
        </Container>
    );
};

export default Login;
