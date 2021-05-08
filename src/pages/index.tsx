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
            {allShopifyProduct &&
                allShopifyProduct.edges.map(({ node }: any) => (
                    <Fragment key={node.handle}>
                        <ProductCard product={node} />
                        <ProductCard product={node} />
                        <ProductCard product={node} />
                        <ProductCard product={node} />
                    </Fragment>
                ))}
        </Layout>
    );
};

export default IndexPage;
