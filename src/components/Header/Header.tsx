import React, { FC } from "react";
import { Link } from "@material-ui/core";
import { HeaderWrapper } from "./Header.css";

interface IHeader {
    siteTitle: string;
}

const Header: FC<IHeader> = ({ siteTitle }: IHeader) => (
    <HeaderWrapper>
        <div>
            <h1>
                <Link href="/">{siteTitle}</Link>
            </h1>
        </div>
    </HeaderWrapper>
);

export default Header;
