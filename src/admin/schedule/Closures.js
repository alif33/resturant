import { useState } from "react";
import ScheduleAdd from "../../modal/scheduleAdd/ScheduleAdd";
import ScheduleCart from "./scheduleCart/ScheduleCart";

const Closures = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="schedule-card-page mt-3">
      <div className="s-card-header">
        <div className="d-flex align-items-center justify-content-between">
          <h3>Closures</h3>
          <ScheduleAdd
            loading={loading}
            setLoading={setLoading}
            postUrl={`admin/schedule/closure`}
          />
        </div>{" "}
      </div>
      <ScheduleCart
        loading={loading}
        setLoading={setLoading}
        url={`schedules/closures`}
        deleteUrl={`admin/schedule/closure`}
      />

      <div className="s-card-bottom">
        <div className="d-flex align-items-center justify-content-end">
          <button className="btn btn-success">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Closures;
