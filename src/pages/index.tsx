import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import Layout from "../components/Layout/Layout";
import "./index.css";

const IndexPage: FC = () => {
    return (
        <Layout>
            <Typography variant="h5">Witaj w sklepie Brillar</Typography>
        </Layout>
    );
};

export default IndexPage;
