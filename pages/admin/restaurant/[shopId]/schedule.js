import { Layout2 } from "../../../../src/admin/layout/Layout";
import SchedulePage from "../../../../src/admin/schedule/SchedulePage";
import { useRouter } from "next/router";
import { adminAuth } from "../../../../__lib__/helpers/requireAuthentication";

const Schedule = () => {
  const router = useRouter();
  const {shopId} = router.query
  return (
    <Layout2 shopId={shopId}>
      <div className="row">
        <div className="col-12">
          <SchedulePage />
        </div>
      </div>
    </Layout2>
  );
};

export default Schedule;


export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});