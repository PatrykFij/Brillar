import React, { FC } from "react";
import { Button, CardActions, CardContent, Typography } from "@material-ui/core";
import { StyledCard } from "./ProductCard.css";

interface IProductCardProps {
    product: IProduct;
}

interface IProduct {
    title: string;
    description: string;
    images: any;
}

const ProductCard: FC<IProductCardProps> = ({ product: { title, description, images } }) => {
    return (
        <StyledCard variant="outlined">
            <CardContent>
                <Typography variant="subtitle2">{title}</Typography>
            </CardContent>
            <img src={images[0].originalSrc} />
            <CardActions>
                <Typography variant="body2">{description}</Typography>
            </CardActions>
        </StyledCard>
    );
};

export default ProductCard;
