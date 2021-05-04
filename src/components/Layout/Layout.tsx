import React, { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../Header/Header";
import { Page } from "./Layout.css";
import Footer from "../Footer/Footer";

interface ILayout {
    children?: JSX.Element[] | JSX.Element;
}

const Layout: FC<ILayout> = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <Page>
                <main>{children}</main>
                <Footer />
            </Page>
        </>
    );
};

export default Layout;
