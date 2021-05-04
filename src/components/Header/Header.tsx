import React, { FC } from "react";
import { Link } from "gatsby";
import { HeaderWrapper } from "./Header.css";

interface IHeader {
    siteTitle: string;
}

const Header: FC<IHeader> = ({ siteTitle }: IHeader) => (
    <HeaderWrapper>
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </HeaderWrapper>
);

export default Header;
