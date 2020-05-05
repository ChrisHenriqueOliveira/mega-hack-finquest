import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    overflow: auto;
`;
export const ContentContainer = styled.div`
    width: 700px;
    height: 100vh;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 40px;
    margin-left: 70px;

    h1 {
        font: 30px Roboto, sans-serif;
        font-weight: 500;
    }

    p {
        font: 18px Roboto, sans-serif;
        color: #8e8e8e;
        margin-top: 15px;
    }
`;
export const LevelContainer = styled.div`
    margin-top: 60px;
    background-color: #fff;
    height: 145px;
    width: 100%;
    border-radius: 20px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);

    .progressBar {
        margin-top: 20px;
        height: 100%;
        margin-bottom: 2em;
        z-index: 0;
    }

    p {
        margin-top: auto;
        margin-left: auto;
        bottom: 20px;
    }
`;
export const BodyContainer = styled.div`
    width: 100%;
    margin-top: 60px;
    display: flex;
    flex-direction: column;

    div {
        display: flex;
    }

    h1 {
        font: 30px Roboto, sans-serif;
        font-weight: 700;
        margin-left: 5px;
        margin-top: auto;
    }
`;
export const CompleteRegister = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    margin-top: 30px;
    margin-bottom: 30px;

    button {
        margin-top: 30px;
        width: 100%;
        height: 50px;
        background: #78c055;
        border-radius: 8px;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;
        text-align: left;
        padding: 0 15px 0 15px;
        display: flex;
        align-items: center;

        font: 18px Roboto, sans-serif;

        &:hover {
            background: ${shade(0.1, '#78C055')};
        }

        svg {
            margin-left: auto;
        }
    }
`;
export const RegisterForm = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    margin-top: 0px;
    margin-bottom: 30px;

    button {
        margin-top: 30px;
        width: 100%;
        height: 50px;
        background: #78c055;
        border-radius: 8px;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;
        text-align: left;
        padding: 0 15px 0 15px;
        display: flex;
        align-items: center;

        font: 18px Roboto, sans-serif;

        &:hover {
            background: ${shade(0.1, '#78C055')};
        }

        svg {
            margin-left: auto;
        }
    }
`;
export const Form = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font: 22px Roboto, sans-serif;
        font-weight: 700;

        margin-top: 20px;
        margin-bottom: 0;
        &:first-child {
            margin: 0;
        }
    }
`;
