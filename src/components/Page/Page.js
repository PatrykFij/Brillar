import React from "react";
import { PageWrapper } from "./Page.css";

const Page = ({ children }) => {
    return (
        <PageWrapper>
            <main>{children}</main>
        </PageWrapper>
    );
};

export default Page;
