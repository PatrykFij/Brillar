import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../Header/Header";
import { CSSGrid } from "./Layout.css";
import Footer from "../Footer/Footer";
import Page from "../Page/Page";

const Layout = ({ children }) => {
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
        <CSSGrid>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <Page>{children}</Page>
            <Footer />
        </CSSGrid>
    );
};

export default Layout;
