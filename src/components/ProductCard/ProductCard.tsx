import React, { FC } from "react";
import { CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import { SoldOutFlag, StyledCard } from "./ProductCard.css";

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
        <Grid item xs={4}>
            <StyledCard variant="outlined">
                <SoldOutFlag>
                    <Typography component="span">Sprzedane</Typography>
                </SoldOutFlag>
                <img src={images[0].originalSrc} />
                <CardContent>
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="body1">{priceRange.minVariantPrice.amount}zł</Typography>
                </CardContent>
            </StyledCard>
        </Grid>
    );
};

export default ProductCard;
