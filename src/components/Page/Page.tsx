import React, { FC } from "react";
import { PageWrapper } from "./Page.css";

interface IPage {
    children?: JSX.Element[] | JSX.Element;
}

const Page: FC<IPage> = ({ children }) => {
    return (
        <PageWrapper>
            <main>{children}</main>
        </PageWrapper>
    );
};

export default Page;
