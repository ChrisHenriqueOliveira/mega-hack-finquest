import styled from 'styled-components';
import { shade } from 'polished';

import leftSideImage from '../../assets/leftside-login.png';

export const Container = styled.div`
    display: flex;
    overflow: hidden;
`;

export const LeftSide = styled.div`
    background: #f0f0f5 url(${leftSideImage}) no-repeat;
    height: 100vh;
    width: 700px;

    display: flex;
    justify-content: center;

    img {
        margin-top: 80px;
        height: 250px;
    }
    
    @media only screen and (max-width: 760px) {
        display: none;
    }
`;

export const ContentContainer = styled.div`
    width: 700px;
    height: 100vh;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 40px;
    overflow: auto;
    padding-bottom: 40px;

    h1 {
        font: 30px Roboto, sans-serif;
        font-weight: 500;

        span {
            font: 30px Roboto, sans-serif;
            font-weight: 500;
            color: #f8d33a;
        }
    }

    p {
        font: 14px Roboto, sans-serif;
        color: black;
        margin-top: 15px;

        span {
            font: 14px Roboto, sans-serif;
            font-weight: bold;
            text-decoration: none;
        }
    }

    @media only screen and (max-width: 760px) {
        padding-top: 0px;
    }
`;

export const Form = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    span {
        font: 14px Roboto, sans-serif;
        color: #bb5050;
        margin-bottom: 20px;
    }

    input {
        flex: 1;
        min-height: 50px;
        width: 350px;
        padding: 0 24px;
        border: 0px;
        border-radius: 8px;
        color: #3a3a3a;
        border: 1px solid #c4c4c4;

        &::placeholder {
            color: #a8a8b3;
        }

        & + input {
            margin-top: 20px;
        }

        &:focus {
            border-left: 3px solid #f8d33a;
            border-right: 3px solid #f8d33a;
        }
    }

    button {
        margin-top: 30px;
        width: 210px;
        height: 50px;
        background: #f8d33a;
        border-radius: 8px;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.1, '#F8D33A')};
        }
    }
`;
