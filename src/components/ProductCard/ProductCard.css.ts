import { Card } from "@material-ui/core";
import styled from "styled-components";
import { BrillarColors } from "../../constants/BrillarColors";

export const StyledCard = styled(Card)`
    height: 430px;
    display: flex;
    flex-direction: column;
    position: relative;

    img {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    h6 {
        font-size: 13px;
        padding-bottom: 10px;
        height: 40px;
        text-align: center;
    }
    p {
        font-weight: 500;
        line-height: 1.5;
        text-align: center;
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
`;
