import React, { Fragment, useEffect } from "react";
import { Layout } from "components";
import ProductCard from "../components/ProductCard/ProductCard";
import { useStaticGetAllShopifyProductsQuery } from "../graphql/AllShopifyProducts";

const IndexPage = () => {
    const { allShopifyProduct } = useStaticGetAllShopifyProductsQuery();

    useEffect(() => {
        allShopifyProduct.edges.map(({ node }) => console.log(node));
    }, [allShopifyProduct]);

    return (
        <Layout>
            {allShopifyProduct &&
                allShopifyProduct.edges.map(({ node }) => (
                    <Fragment key={node.handle}>
                        <ProductCard product={node} />
                    </Fragment>
                ))}
        </Layout>
    );
};

export default IndexPage;
