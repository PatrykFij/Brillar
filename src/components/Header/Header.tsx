import React, { FC } from "react";
import { Typography } from "@material-ui/core";
import { HeaderWrapper, IconsContainer } from "./Header.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "gatsby";

interface IHeader {
    siteTitle: string;
}

const Header: FC<IHeader> = ({ siteTitle }) => (
    <HeaderWrapper>
        <Typography variant="h3">
            <Link to="/">{siteTitle}</Link>
        </Typography>
        <IconsContainer>
            <Link to="/basket">
                <ShoppingCartIcon />
            </Link>
            <Link to="/login">
                <PersonOutlineIcon />
            </Link>
        </IconsContainer>
    </HeaderWrapper>
);

export default Header;
