/* eslint-disable react/jsx-indent-props */
import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import ReactTooltip from 'react-tooltip';

import Menu from '../../Components/Menu';

import profile from '../../assets/profileimg.png';

import { Container, ContentContainer, ProfileInfo, Form } from './styles';

const Profile: React.FC = () => {
    const auxError = [''];
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmNewPass, setConfirmNewPass] = useState('');
    const [alterPass, setAlterPass] = useState(false);
    const [hasError, setHasError] = useState<string[]>([]);

    async function handleLogin(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();

        if (oldPass === '' || newPass === '' || confirmNewPass === '') {
            auxError.push('Preencha todos os campos');
        }

        if (newPass !== confirmNewPass) {
            auxError.push('Senhas não coincidem');
        }
        setHasError(auxError);

        if (auxError.length === 1) {
            setAlterPass(false);
        }
    }

    function handleCancelLogin(): void {
        setOldPass('');
        setNewPass('');
        setConfirmNewPass('');

        setHasError([]);
        setAlterPass(false);
    }

    return (
        <Container>
            <Menu selectedMenu="Profile" />
            <ContentContainer>
                <Link className="linkStyle" to="/dashboard">
                    <FiArrowLeft size={35} />
                </Link>
                <h1>Perfil</h1>
                <p>Visualize as informações da sua conta</p>
                <ProfileInfo>
                    <img src={profile} alt="Profile" data-tip="Mudar Imagem" />
                    <ReactTooltip place="right" type="dark" effect="solid" />
                    <h1>Christian Henrique de Oliveira</h1>
                    <p>christian1101999@gmail.com</p>
                    <p>Entrou em: 26/04/2020</p>
                    <p>21 missões completas</p>
                    {!alterPass ? (
                        <button
                            type="submit"
                            onClick={(e) => setAlterPass(true)}
                        >
                            Alterar senha
                        </button>
                    ) : (
                        <>
                            <button
                                className="cancel"
                                type="submit"
                                onClick={handleCancelLogin}
                            >
                                Cancelar
                            </button>

                            <Form onSubmit={handleLogin}>
                                {hasError &&
                                    hasError.map((error) => (
                                        <span key={error}>{error}</span>
                                    ))}
                                <input
                                    onChange={(e) => setOldPass(e.target.value)}
                                    placeholder="Senha antiga"
                                    type="password"
                                />
                                <input
                                    onChange={(e) => setNewPass(e.target.value)}
                                    placeholder="Nova senha"
                                    type="password"
                                />
                                <input
                                    onChange={(e) =>
                                        setConfirmNewPass(e.target.value)
                                    }
                                    placeholder="Confirmar nova senha"
                                    type="password"
                                />
                                <button className="confirm" type="submit">
                                    Save
                                </button>
                            </Form>
                        </>
                    )}
                </ProfileInfo>
            </ContentContainer>
        </Container>
    );
};

export default Profile;
