import React from "react";
import Layout from "../src/admin/layout/Layout";
import { adminAuth } from "../__lib__/helpers/requireAuthentication";

const index = () => {
  return <Layout></Layout>;
};

export default index;

export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});
