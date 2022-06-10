import Layout from "../../src/admin/layout/Layout";
import RestaurentNavbar from "../../src/admin/restaurent/restaurentNavbar/RestaurentNavbar";
import AppShopTable from "../../src/admin/restaurent/appShopTable/AppShopTable";

const AddShopPage = () => {
  return (
    <Layout>
      <RestaurentNavbar status="addshop" />
      <div className="row">
        <div className="col-12 mt-4">
          <AppShopTable />
        </div>
      </div>
    </Layout>
  );
};

export default AddShopPage;
