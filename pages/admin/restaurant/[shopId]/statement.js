import { useRouter } from "next/router";
import React from "react";
import { Layout2 } from "../../../../src/admin/layout/Layout";
import Navbar from "../../../../src/admin/Navbar/Navbar";
import { adminAuth } from "../../../../__lib__/helpers/requireAuthentication";

const StatementPage = () => {
  const router = useRouter();
  const { shopId } = router?.query;
  return (
    <Layout2 shopId={shopId}>
      <Navbar status="Statements" shopId={shopId} />
    </Layout2>
  );
};

export default StatementPage;

export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});
