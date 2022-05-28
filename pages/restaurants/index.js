import Layout from "../../src/admin/layout/Layout";
import RestaurentTable from "../../src/admin/restaurent/restaurentTable/RestaurentTable";
import RestaurentNavbar from "../../src/admin/restaurent/restaurentNavbar/RestaurentNavbar";



const Restaurants = () => {
  return (
    <Layout>
      <RestaurentNavbar />
      <div className="row">
        <div className="col-12 mt-4">
          <RestaurentTable />
        </div>
      </div>
    </Layout>
  );
};

export default Restaurants;
