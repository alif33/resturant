import BannerPage from "../../../../src/admin/dashboard/Banner/BannerPage";
import { Layout2 } from "../../../../src/admin/layout/Layout";
import { useRouter } from "next/router";
import { adminAuth } from "../../../../__lib__/helpers/requireAuthentication";

const Bannger = () => {
  const router = useRouter();
  const { shopId } = router.query;
  return (
    <Layout2 shopId={shopId}>
      <div className="row mt-4">
        <div className="col-12">
          <BannerPage />
        </div>
      </div>
    </Layout2>
  );
};

export default Bannger;

export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});
