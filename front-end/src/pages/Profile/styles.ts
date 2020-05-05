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
export const ProfileInfo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
    padding-bottom: 30px;

    img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        transition: opacity 0.2s;
        cursor: pointer;

        &:hover {
            opacity: 0.9;
        }
    }

    .changeImageText {
        position: absolute;
        top: 50%;
    }

    h1 {
        margin-top: 30px;
        font: 30px Roboto, sans-serif;
        font-weight: 500;
    }

    p {
        margin-top: 5px;
        font: 18px Roboto, sans-serif;
        font-weight: 400;
    }

    button {
        margin-top: 30px;
        width: 210px;
        height: 50px;
        background: #50b0bb;
        border-radius: 8px;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.1, '#50B0BB')};
        }
    }

    .cancel {
        background-color: #bb5050;

        &:hover {
            background: ${shade(0.1, '#bb5050')};
        }
    }

    span {
        font: 14px Roboto, sans-serif;
        color: #bb5050;
        margin-bottom: 5px;
    }
`;
export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        font: 14px Roboto, sans-serif;
        color: #bb5050;
        margin-bottom: 10px;
        margin-top: -10px;
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
            border-left: 3px solid #78c055;
            border-right: 3px solid #78c055;
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

    .confirm {
        background-color: #78c055;

        &:hover {
            background: ${shade(0.1, '#78c055')};
        }
    }
`;
