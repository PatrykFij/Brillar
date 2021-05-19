import React, { useState } from "react";

const defaultState = {
    test: 1,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setTest: () => {},
};

const CartContext = React.createContext(defaultState);
export default CartContext;

export function CartContextProvider({ children }) {
    const [test, setTest] = useState(1);

    return <CartContext.Provider value={{ test, setTest }}>{children}</CartContext.Provider>;
}
