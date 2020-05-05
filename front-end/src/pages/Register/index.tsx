/* eslint-disable react/jsx-indent-props */
import React, { FormEvent, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logo from '../../assets/logo.png';

import { Container, LeftSide, ContentContainer, Form } from './styles';

const Register: React.FC = () => {
    const auxError = [''];
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [yearOfBirth, setYearOfBirth] = useState('');
    const [hasError, setHasError] = useState<string[]>([]);
    const [redirect, setRedirect] = useState(false);

    async function handleLogin(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();
        setHasError([]);

        if (
            name === '' ||
            email === '' ||
            confirmEmail === '' ||
            password === '' ||
            confirmPassword === '' ||
            cellphone === '' ||
            yearOfBirth === ''
        ) {
            auxError.push('Preencha todos os campos');
        }

        if (email !== confirmEmail) {
            auxError.push('Emails não coincidem');
        }

        if (password !== confirmPassword) {
            auxError.push('Senhas não coincidem');
        }

        if (cellphone.length < 13) {
            auxError.push('Complete o celular no formato correto');
        }

        if (yearOfBirth.length !== 4) {
            auxError.push('Complete o ano de nascimento no formato correto');
        }
        setHasError(auxError);

        if (auxError.length === 1) {
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
                    <span>Registre </span>
                    uma nova conta
                </h1>
                <p>
                    Já possui uma conta? &zwnj;
                    <Link className="linkStyle" to="/login">
                        <span>Clique aqui para entrar!</span>
                    </Link>
                </p>
                <Form onSubmit={handleLogin}>
                    {hasError &&
                        hasError.map((error) => (
                            <span key={error}>{error}</span>
                        ))}
                    <input
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nome"
                        type="text"
                        value={name}
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        type="email"
                        value={email}
                    />
                    <input
                        onChange={(e) => setConfirmEmail(e.target.value)}
                        placeholder="Confirmar email"
                        type="email"
                        value={confirmEmail}
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Senha"
                        type="password"
                        value={password}
                    />
                    <input
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirmar senha"
                        type="password"
                        value={confirmPassword}
                    />
                    <input
                        onChange={(e) => setCellphone(e.target.value)}
                        placeholder="Celular (ex.: 11-99323-2342)"
                        type="text"
                        value={cellphone}
                    />
                    <input
                        onChange={(e) => setYearOfBirth(e.target.value)}
                        placeholder="Ano de nascimento (ex.: 1980)"
                        type="text"
                        value={yearOfBirth}
                    />
                    <button type="submit">Registrar</button>
                </Form>
            </ContentContainer>
        </Container>
    );
};

export default Register;
