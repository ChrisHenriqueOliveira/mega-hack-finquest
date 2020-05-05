import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface Status {
    status: string;
}

export const ChallangesContainer = styled.div`
    padding: 30px 0px;
    display: flex;
    flex-direction: column;
`;

export const ChallangeItems = styled.button<Status>`
    width: 100%;
    height: 50px;
    padding: 0px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
    margin-top: 20px;
    cursor: pointer;
    border: none;

    cursor: ${({ status }) => status === 'Locked' && 'default'};

    background-color: ${({ status }) =>
        (status === 'Done' && '#78c055') ||
        (status === 'Fail' && '#BB5050') ||
        (status === 'Current' && '#50B0BB') ||
        (status === 'Locked' && '#C4C4C4')};

    &:first-child {
        margin-top: 0px;
    }

    h2 {
        font: 25px Roboto, sans-serif;
        font-weight: 500;
        color: #fff;
        margin: 0;
    }

    h3 {
        font: 18px Roboto, sans-serif;
        font-weight: 300;
        margin: 0 0 0 15px;
        color: #fff;
    }

    svg {
        margin-left: auto;
        color: #fff;
    }
`;

export const ChallangeInfo = styled.div<Status>`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    margin-top: 5px;
    cursor: defaul;
    border: none;
    overflow: auto;

    background-color: ${({ status }) =>
        (status === 'Done' && '#78c055') ||
        (status === 'Fail' && '#BB5050') ||
        (status === 'Current' && '#50B0BB') ||
        (status === 'Locked' && '#C4C4C4')};

    h2 {
        font: 18px Roboto, sans-serif;
        font-weight: 400;
        color: #fff;
    }

    svg {
        margin-left: auto;
        color: #fff;
    }

    a {
        font-size: 18px;
        font-weight: 500;
        text-decoration: none;
        background-color: #fff;
        text-align: center;
        color: #50b0bb;
        line-height: 30px;
        border-radius: 8px;

        &:hover {
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
        }

        &:active {
            opacity: 0.8;
        }
    }

    .buttonsContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        button {
            margin-top: 15px;
            width: 49%;
            height: 50px;
            background: #78c055;
            border-radius: 8px;
            border: 0;
            color: #fff;
            font-weight: bold;
            transition: background-color 0.2s;
            padding: 0 15px 0 15px;
            display: flex;
            align-items: center;
            justify-content: center;

            font: 18px Roboto, sans-serif;

            &:hover {
                background: ${shade(0.1, '#78C055')};
            }

            & + button {
                background: #bb5050;

                &:hover {
                    background: ${shade(0.1, '#BB5050')};
                }
            }
        }
    }
`;
