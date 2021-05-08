import React, { FC } from "react";
import { Button, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import { SoldOutFlag, StyledCard, StyledCardActions } from "./ProductCard.css";

interface IProductCardProps {
    product: IProduct;
}

interface IProduct {
    title: string;
    priceRange: IPriceRange;
    images: any;
    availableForSale: boolean;
}

interface IPriceRange {
    minVariantPrice: IAmount;
    maxVariantPrice: IAmount;
}

interface IAmount {
    amount: string;
}

const ProductCard: FC<IProductCardProps> = ({ product: { title, priceRange, images, availableForSale } }) => {
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
