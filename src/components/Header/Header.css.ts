import styled from "styled-components";
import { BrillarColors } from "../../constants/BrillarColors";

export const HeaderWrapper = styled.header`
    background: ${BrillarColors.COLOR_GOLD};
    margin-bottom: 1.45rem;

    div:first-child {
        margin: 0 auto;
        max-width: 960px;
    }

    h1 {
        margin: 0;
    }

    & a {
        color: ${BrillarColors.COLOR_WHITE};
        text-decoration: none;
    }
`;
