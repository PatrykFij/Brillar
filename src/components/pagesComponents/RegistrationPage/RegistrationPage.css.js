import styled from "styled-components";
import { BrillarColors } from "../../../constants/BrillarColors";
import mediaQuery from "../../../constants/MediaQueries";

export const RegistrationPageWrapper = styled.div`
    background-color: ${BrillarColors.COLOR_GOLD};
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100vw;
    height: 100vh;

    ${mediaQuery.LG} {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Register = styled.div`
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
        .MuiButton-root {
            min-width: 150px;
        }
    }
`;
