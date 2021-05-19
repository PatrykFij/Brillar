import styled from "styled-components";
import { BrillarColors } from "../../constants/BrillarColors";
import mediaQuery from "../../constants/MediaQueries";

export const HeaderWrapper = styled.header`
    grid-column: 1 / -1;
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

    a {
        color: ${BrillarColors.COLOR_WHITE};
        text-decoration: none;
    }
    ${mediaQuery.SM} {
        padding: 4px 10px;

        h3 {
            font-size: 2.5rem;
        }
    }
`;

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;

    svg {
        font-size: 30px;
        padding: 0 10px;
    }

    .MuiBadge-colorSecondary {
        background-color: ${BrillarColors.COLOR_BADGE};
    }

    ${mediaQuery.SM} {
        svg {
            font-size: 25px;
        }
    }
`;
