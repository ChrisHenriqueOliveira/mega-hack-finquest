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
        margin-bottom: 40px;
    }
`;
export const TipsContainer = styled.div`
    margin-bottom: 30px;
    background-color: #fff;
    width: 100%;
    border-radius: 20px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: left;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);

    h1 {
        font: 25px Roboto, sans-serif;
        font-weight: 500;
    }

    p {
        margin-top: 0px;
        margin-bottom: 20px;
    }

    a {
        font-size: 18px;
        font-weight: 500;
        text-decoration: none;
        background-color: #fff;
        text-align: center;
        color: #fff;
        line-height: 30px;
        border-radius: 8px;
        background-color: #78c055;

        &:hover {
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
        }

        &:active {
            opacity: 0.8;
        }
    }
`;
