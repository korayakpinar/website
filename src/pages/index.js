import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "./index.module.scss";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.centeredText}>
      <h1 id="slogan" className={`hero ` + styles.h1}>
        We {"  "} build {"  "} the {"  "} next {"  "} cool {"  "} thing.
      </h1>
    </div>
  </Layout>
);

export default IndexPage;
