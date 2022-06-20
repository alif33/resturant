import CouponsPage from "../../../../src/admin/dashboard/Coupons/CouponsPage";
import { Layout2 } from "../../../../src/admin/layout/Layout";
import { useRouter } from "next/router";
import { adminAuth } from "../../../../__lib__/helpers/requireAuthentication";

const Coupons = () => {
  const router = useRouter();
  const { shopId } = router.query;
  return (
    <Layout2 shopId={shopId}>
      <div className="row">
        <div className="col-12">
          <CouponsPage />
        </div>
      </div>
    </Layout2>
  );
};

export default Coupons;


export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});