import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

const Products = () => {
    const data = useStaticQuery(graphql`
        query {
            cosmetics {
                shampoos {
                    id
                    thumbnail {
                        id
                        stage
                    }
                    name
                    decription
                }
            }
        }
    `);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return <p>laldaldalsdlasdas</p>;
};

export default Products;
