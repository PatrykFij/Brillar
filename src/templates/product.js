import React, { useEffect, useContext } from "react";
import { Layout, SEO } from "components";
import CartContext from "../context/CartContext";
import { useLocation } from "@reach/router";
import queryString from "query-string";

const ProductTemplate = ({ pageContext }) => {
    const [product, setProduct] = React.useState(null);
    const [selectedVariant, setSelectedVariant] = React.useState(null);
    const { getProductById } = useContext(CartContext);
    const { search } = useLocation();

    const variantId = queryString.parse(search).variant;

    useEffect(() => {
        console.log(pageContext);
        getProductById(pageContext.shopifyProduct.shopifyId).then((result) => {
            console.log(result);
            setProduct(result);
            setSelectedVariant(result.variants.find(({ id }) => id === variantId) || result.variants[0]);
        });
    }, [getProductById, pageContext.shopifyProduct.shopifyId, setProduct, setSelectedVariant]);

    return (
        <Layout>
            <SEO description={pageContext.shopifyProduct.description} title={pageContext.shopifyProduct.title} />
        </Layout>
    );
};

export default ProductTemplate;
