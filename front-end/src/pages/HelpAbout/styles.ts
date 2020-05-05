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
export const HelpContainer = styled.div`
    margin-top: 60px;
    background-color: #fff;
    width: 100%;
    border-radius: 20px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    text-align: center;

    p:first-child {
        margin: 0px;
        margin-bottom: 10px;
    }

    & + p {
        margin: 0px;
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
export const MembersCointainer = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;
