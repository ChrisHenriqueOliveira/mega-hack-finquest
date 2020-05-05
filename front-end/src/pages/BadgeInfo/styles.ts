import styled, { css } from 'styled-components';
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

export const BadgeInfoContainer = styled.div`
    margin-top: 60px;
    background-color: #fff;
    width: 100%;
    border-radius: 20px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    margin-bottom: 30px;

    .badgeTitle {
        display: flex;
        flex-direction: column;
        width: 100%;

        h1 {
            font: 45px Roboto, sans-serif;
            font-weight: 500;
            margin-top: 0;
            text-align: center;
        }

        a {
            color: black;
            margin-left: auto;
            cursor: pointer;
        }
    }

    p {
        text-align: center;
        margin: 15px 0 0 0;

        & + p {
            padding: 0 20px 20px 20px;
            color: black;
            text-align: center;
        }
    }

    .badge {
        margin-top: 20px;
        color: #50b0bb;
        height: 200px;
        width: 100%;
    }
`;
