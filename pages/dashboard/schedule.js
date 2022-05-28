import Layout from "../../src/admin/layout/Layout";
import SchedulePage from "../../src/admin/schedule/SchedulePage";

const Schedule = () => {
  return <Layout>
      <div className="row">
          <div className="col-12">
              <SchedulePage />
          </div>
      </div>
  </Layout>;
};

export default Schedule;
