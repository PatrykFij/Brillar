import styled from "styled-components";
import mediaQuery from "../../constants/MediaQueries";

export const PageWrapper = styled.div`
    margin: 0 10px;

    main {
        display: grid;
        grid-gap: 15px;
        grid-template-columns: 1fr 1fr;
    }

    ${mediaQuery.MD} {
        grid-column: 1 / 13;
        main {
            grid-template-columns: repeat(3, 1fr);
            padding: 10px;
            grid-gap: 10px;
        }
    }

    ${mediaQuery.LG} {
        main {
            grid-template-columns: repeat(6, 1fr);
        }
    }
`;
