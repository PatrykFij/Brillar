import React, { FC } from "react";

import Layout from "../components/Layout/Layout";

interface IProductTemplate {
    pageContext: any;
}

const ProductTemplate: FC<IProductTemplate> = ({ pageContext }) => {
    const { product } = pageContext;
    return (
        <Layout>
            <h1>{product.title}</h1>
            <div>{product.description}</div>
        </Layout>
    );
};

export default ProductTemplate;
