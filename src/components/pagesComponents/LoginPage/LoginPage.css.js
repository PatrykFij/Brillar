import styled from "styled-components";
import { BrillarColors } from "../../../constants/BrillarColors";
import mediaQuery from "../../../constants/MediaQueries";

export const LoginPageWrapper = styled.div`
    background-color: ${BrillarColors.COLOR_GOLD};
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100vw;
    height: 100vh;

    ${mediaQuery.LG} {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Login = styled.div`
    background-color: ${BrillarColors.COLOR_WHITE};
    grid-column: 3 / 6;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    ${mediaQuery.LG} {
        grid-column: 1 / -1;
    }
`;

export const FormWrapper = styled.div`
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 300px;

    h3 {
        color: ${BrillarColors.COLOR_GOLD};
        padding-bottom: 25px;
    }

    & > div {
        padding-bottom: 15px;
    }

    & > div:nth-child(2) {
        padding-bottom: 5px;
    }

    ${mediaQuery.LG} {
        margin: 0 auto;
    }

    ${mediaQuery.SM} {
        h3 {
            padding-bottom: 15px;
        }
    }
`;

export const ActionsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;

    p {
        font-size: 0.8rem;
    }

    & > div {
        padding-bottom: 7px;
    }

    .MuiButton-root {
        background-color: ${BrillarColors.COLOR_GOLD};
        color: ${BrillarColors.COLOR_WHITE};
        min-width: 170px;
    }

    .MuiButton-root:hover {
        background-color: ${BrillarColors.COLOR_GOLD};
    }

    ${mediaQuery.SM} {
        span {
            font-size: 12px;
        }

        .MuiButton-root {
            min-width: 150px;
        }

        p {
            font-size: 0.6rem;
        }
    }
`;

export const LoginWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: min-content;
    justify-content: flex-end;

    p {
        padding-bottom: 10px;
    }
`;

export const RegisterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
`;
