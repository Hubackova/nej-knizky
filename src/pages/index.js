import React from "react";
import Layout from "../components/layout";
import Images from "../components/scienceFiction";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Images />
    </Layout>
  );
};

export default IndexPage;
