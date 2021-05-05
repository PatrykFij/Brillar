import React, { FC } from "react";
import { Link, Typography } from "@material-ui/core";
import { HeaderWrapper } from "./Header.css";

interface IHeader {
    siteTitle: string;
}

const Header: FC<IHeader> = ({ siteTitle }: IHeader) => (
    <HeaderWrapper>
        <div>
            <Typography variant="h3">
                <Link href="/">{siteTitle}</Link>
            </Typography>
        </div>
    </HeaderWrapper>
);

export default Header;
