import React from "react";
import { Button, CardContent, Typography } from "@material-ui/core";
import { SoldOutFlag, StyledCard, StyledCardActions } from "./ProductCard.css";

const ProductCard = ({ product: { title, priceRange, images, availableForSale } }) => {
    return (
        <StyledCard variant="outlined">
            <SoldOutFlag>
                <Typography component="span">Sprzedane</Typography>
            </SoldOutFlag>
            <img src={images[0].originalSrc} />
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body1">{priceRange.minVariantPrice.amount}zł</Typography>
            </CardContent>
            <StyledCardActions>
                <Button size="small" color="primary">
                    Dodaj do koszyka
                </Button>
            </StyledCardActions>
        </StyledCard>
    );
};

export default ProductCard;
