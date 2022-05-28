import React from "react";
import Closures from "./Closures";
import ScheduleCardPage from "./ScheduleCardPage";
import SpecialHours from "./SpecialHours";

const SchedulePage = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <h3>#50482 Fat Tomato: Schedule</h3>
          <h6>Shop&apos;s Local Time: 17:50EST</h6>
        </div>
        <ScheduleCardPage />
        <SpecialHours />
        <Closures />
      </div>
    </div>
  );
};

export default SchedulePage;
