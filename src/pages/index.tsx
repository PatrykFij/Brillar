import { Grid, Typography } from "@material-ui/core";
import React, { FC, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import ProductCard from "../components/ProductCard/ProductCard";
import { useStaticGetAllShopifyProductsQuery } from "../graphql/AllShopifyProducts";

const IndexPage: FC = () => {
    const { allShopifyProduct } = useStaticGetAllShopifyProductsQuery();

    useEffect(() => {
        allShopifyProduct.edges.map(({ node }: any) => console.log(node));
    }, [allShopifyProduct]);

    return (
        <Layout>
            <Typography variant="h5">Witaj w sklepie Brillar</Typography>
            <Grid justify="center" spacing={2} container>
                {allShopifyProduct &&
                    allShopifyProduct.edges.map(({ node }: any) => <ProductCard key={node.handle} product={node} />)}
            </Grid>
        </Layout>
    );
};

export default IndexPage;
