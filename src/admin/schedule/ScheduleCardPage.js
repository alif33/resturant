import { useState } from "react";
import ScheduleAdd from "../../modal/scheduleAdd/ScheduleAdd";
import ScheduleCart from "./scheduleCart/ScheduleCart";

const ScheduleCardPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="schedule-card-page">
      <div className="s-card-header">
        <div className="d-flex align-items-center justify-content-between">
          <h3>Regular Hours</h3>
          <ScheduleAdd setLoading={setLoading} postUrl={`admin/schedule`} />
        </div>
      </div>

      <ScheduleCart loading={loading} url={`schedules`} />

      <div className="s-card-bottom">
        <div className="d-flex align-items-center justify-content-end">
          <button className="btn btn-success">Save</button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCardPage;
