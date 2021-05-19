import styled from "styled-components";
import mediaQuery from "../../constants/MediaQueries";

export const PageWrapper = styled.div`
    grid-column: 2 / 12;
    width: 100%;
    margin: 0 auto;

    main {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 15px;
    }
    ${mediaQuery.LG} {
        main {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    ${mediaQuery.MD} {
        grid-column: 1 / 13;
        main {
            grid-template-columns: repeat(3, 1fr);
            padding: 10px;
            grid-gap: 10px;
        }
    }

    ${mediaQuery.SM} {
        main {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;
