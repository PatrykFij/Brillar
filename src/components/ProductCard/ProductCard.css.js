import { Card, CardActions } from "@material-ui/core";
import styled from "styled-components";
import { BrillarColors } from "../../constants/BrillarColors";
import mediaQuery from "../../constants/MediaQueries";

export const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 10px;

    img {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    h6 {
        font-size: 13px;
        padding-bottom: 10px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    p {
        font-weight: 500;
        line-height: 1.5;
        text-align: center;
    }

    ${mediaQuery.SM} {
        h6 {
            font-size: 10px;
            padding-bottom: 5px;
        }

        p {
            font-size: 10px;
        }
    }
`;

export const SoldOutFlag = styled.div`
    position: absolute;
    top: 16px;
    right: 0;

    span {
        color: ${BrillarColors.COLOR_WHITE};
        background: ${BrillarColors.COLOR_GOLD};
        opacity: 0.8;
        padding: 5px 15px 5px 5px;
    }

    ${mediaQuery.SM} {
        span {
            font-size: 10px;
        }
    }
`;

export const StyledCardActions = styled(CardActions)`
    background: ${BrillarColors.COLOR_GOLD};
    margin: auto;

    span {
        color: ${BrillarColors.COLOR_WHITE};
    }

    ${mediaQuery.SM} {
        padding: 3px;
    }
`;
