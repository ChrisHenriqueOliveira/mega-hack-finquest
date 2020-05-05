import styled, { css } from 'styled-components';
import { StringifyOptions } from 'querystring';

interface Props {
    selectedMenu: string;
    actualMenu: string;
}

export const Container = styled.div`
    display: flex;
    overflow: hidden;
    position: fixed;
    width: 70px;
    background-color: #78c055;
    border-radius: 0px 8px 8px 0px;
    height: 100%;

    .toolTip {
        z-index: 10;
    }
`;

export const ContentContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .linkLogo {
        height: 50px;
        margin-top: 0px;
        display: flex;
        color: #fff;

        img {
            height: 50px;
            width: 50px;
        }
    }

    .linkStyle {
        height: 50px;
        margin-top: 0px;
        display: flex;
        color: #fff;

        img {
            height: 50px;
            width: 50px;
            border-radius: 50%;
        }
    }
`;

export const MenuOptions = styled.div`
    align-items: center;
    /*margin-top: 100px;*/
    width: 70px;

    ul {
        list-style: none;
        padding: 0px;
    }
`;

export const MenuButton = styled.li<Props>`
    font: 30px Roboto, sans-serif;
    height: 70px;
    width: 100%;
    cursor: pointer;

    ${(props) =>
        props.selectedMenu === props.actualMenu
            ? css`
                  border-radius: 20px;
                  background-color: #b2e29b;
              `
            : css`
                  background-color: #78c055;
              `}

    &:hover {
        border-radius: 20px;
        background-color: #b2e29b;
    }

    .linkStyle {
        color: #fff;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
