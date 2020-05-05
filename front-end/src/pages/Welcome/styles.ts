import styled from 'styled-components';
import { shade } from 'polished';

import leftSideImage from '../../assets/leftside-welcome.png';

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
    padding-top: 190px;
    overflow: auto;
    padding-bottom: 40px;
    padding-right: 30px;

    h1 {
        font: 65px Roboto black, sans-serif;

        span {
            font: 65px Roboto black, sans-serif;
            color: #78c055;
        }
    }

    p {
        font: 24px Roboto, sans-serif;
        color: #8e8e8e;
        margin-top: 50px;
    }

    @media only screen and (max-width: 920px) {
        padding-top: 30px;

        h1 {
            font: 55px Roboto black, sans-serif;
            text-align: center;

            span {
                font: 55px Roboto black, sans-serif;
            }
        }

        p {
            text-align: center;
        }
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-top: 100px;

    button {
        width: 210px;
        height: 70px;
        border-radius: 8px;
        font-weight: bold;
        transition: background-color 0.1s, opacity 0.1s;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    }

    button.login {
        background: #78c055;
        border: 0;
        color: #fff;

        &:hover {
            background: ${shade(0.2, '#78c055')};
        }
    }

    button.register {
        border: 1px solid #78c055;
        color: #78c055;
        margin-left: 30px;

        &:hover {
            opacity: 0.6;
        }
    }

    @media only screen and (max-width: 920px) {
        display: flex;
        flex-direction: column;

        button {
            width: 100%;
        }

        button.register {
        margin-left: 0px;
        }
    }
    }
`;
