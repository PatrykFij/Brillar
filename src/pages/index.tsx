import { Grid, Typography } from "@material-ui/core";
import React, { FC, Fragment, useEffect } from "react";
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
            <Grid justify="flex-start" spacing={2} container>
                {allShopifyProduct &&
                    allShopifyProduct.edges.map(({ node }: any) => (
                        <Fragment key={node.handle}>
                            <ProductCard product={node} />
                            <ProductCard product={node} />
                            <ProductCard product={node} />
                        </Fragment>
                    ))}
            </Grid>
        </Layout>
    );
};

export default IndexPage;
