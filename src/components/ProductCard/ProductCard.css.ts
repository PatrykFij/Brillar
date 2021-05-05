import { Card } from "@material-ui/core";
import styled from "styled-components";

export const StyledCard = styled(Card)`
    min-width: 275px;
    max-width: 275px;
    display: flex;
    flex-direction: column;

    img {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
`;
