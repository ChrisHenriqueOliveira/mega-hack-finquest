import styled, { css } from 'styled-components';

interface Props {
    hasBadge: boolean;
}

export const Goal = styled.div<Props>`
    background-color: #fff;
    border-radius: 20px;
    height: 192.5px;
    width: 30%;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    cursor: pointer;

    ${(props) =>
        !props.hasBadge &&
        css`
            cursor: default;
        `}
    }
    svg {
        color: #c4c4c4;

        ${(props) =>
            props.hasBadge &&
            css`
                color: #50b0bb;
            `}
    }
`;
