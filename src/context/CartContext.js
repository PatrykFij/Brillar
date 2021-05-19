import React, { useState } from "react";
import Client from "shopify-buy";

const defaultState = {
    test: 1,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setTest: () => {},
};

const client = Client.buildClient({
    domain: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`,
    storefrontAccessToken: process.env.GATSBY_ACCESS_TOKEN,
});

const CartContext = React.createContext(defaultState);
export default CartContext;

export function CartContextProvider({ children }) {
    const [test, setTest] = useState(1);

    async function getProductById(productId) {
        const product = await client.product.fetch(productId);
        return product;
    }

    return <CartContext.Provider value={{ getProductById, test, setTest }}>{children}</CartContext.Provider>;
}
