import styled from "styled-components";
import { BrillarColors } from "../../constants/BrillarColors";

export const HeaderWrapper = styled.header`
    background: ${BrillarColors.COLOR_GOLD};
    margin-bottom: 1.45rem;
    padding: 0 70px;
    display: flex;
    justify-content: space-between;

    div:first-child {
        margin: 0 auto;
    }

    h1 {
        margin: 0;
    }

    & a {
        color: ${BrillarColors.COLOR_WHITE};
        text-decoration: none;
    }
`;

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;

    svg {
        font-size: 30px;
        padding: 0 10px;
    }
`;
