import React, { useEffect } from "react";
import { Badge, Typography } from "@material-ui/core";
import { HeaderWrapper, IconsContainer } from "./Header.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "gatsby";
import CartContext from "../../context/CartContext";

const Header = ({ siteTitle }) => {
    const { test, setTest } = React.useContext(CartContext);

    useEffect(() => {
        console.log("$$$$", test);
    }, [test]);

    return (
        <HeaderWrapper onClick={() => setTest(test + 1)}>
            <Typography variant="h3">
                <Link to="/">{siteTitle}</Link>
            </Typography>
            <IconsContainer>
                <Link to="/basket">
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </Link>
                <Link to="/login">
                    <PersonOutlineIcon />
                </Link>
            </IconsContainer>
        </HeaderWrapper>
    );
};

export default Header;
