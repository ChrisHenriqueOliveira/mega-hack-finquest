import styled, { css } from 'styled-components';

export const Member = styled.div`
    background-color: #fff;
    border-radius: 20px;
    width: 48%;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    margin-top: 30px;

    .header {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            margin-top: -50px;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
            border: 5px solid #fff;
            width: 200px;
            height: 200px;
            border-radius: 50%;
        }

        h1 {
            font: 20px Roboto, sans-serif;
            font-weight: 700;
            margin-top: 10px;
            margin-bottom: 0px;
            text-align: center;
        }
        h2 {
            margin-top: 0px;
            margin-bottom: 25px;
            font: 20px Roboto, sans-serif;
            margin-top: 10px;
            color: #8e8e8e;
        }

        .divider {
            margin-top: 0px;
            width: 100%;
        }
    }

    .social {
        margin-top: 15px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        button {
            cursor: pointer;

            border: none;
            background-color: transparent;

            svg {
                height: 40px;
                width: 20px;
                color: #50b0bb;

                &:hover {
                    height: 40px;
                    width: 40px;
                }
            }
        }
    }
`;
