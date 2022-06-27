import Layout from "../../../src/admin/layout/Layout";
import RestaurentNavbar from "../../../src/admin/restaurent/restaurentNavbar/RestaurentNavbar";
import AddShopTable from "../../../src/admin/restaurent/addShopTable/AddShopTable";
import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";

const AddShopPage = () => {
  return (
    <Layout>
      <RestaurentNavbar status="addshop" />
      <div className="row">
        <div className="col-12 mt-4">
          <AddShopTable />
        </div>
      </div>
    </Layout>
  );
};

export default AddShopPage;

export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});
