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
export const ProgressContainer = styled.div`
    margin-top: 60px;
    background-color: #fff;
    height: 235px;
    width: 100%;
    border-radius: 20px;
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);

    .progressBar {
        height: 87%;
    }

    .infoSide {
        margin-left: 40px;
    }
`;
export const GoalsContainer = styled.div`
    width: 100%;
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
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
        align-items: center;
        width: 100%;

        h1 {
            font: 50px Roboto, sans-serif;
            font-weight: 700;
            margin-top: 0;
        }

        svg {
            color: black;
            align-self: flex-end;
            cursor: pointer;
        }
    }

    p {
        text-align: center;

        & + p {
            color: black;
            text-align: left;
        }
    }

    .badge {
        color: #50b0bb;
        height: 200px;
        width: 100%;
    }
`;
