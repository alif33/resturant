import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getData } from "../../../__lib__/helpers/HttpService";
import ScheduleAdd from "../../modal/scheduleAdd/ScheduleAdd";

const ScheduleCardPage = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { shopId } = router.query;

  useEffect(() => {
    getData(`schedules/${shopId}`).then((res) => setSchedules(res));
  }, [shopId, loading]);

  return (
    <div className="schedule-card-page">
      <div className="s-card-header">
        <div className="d-flex align-items-center justify-content-between">
          <h3>Regular Hours</h3>
          <ScheduleAdd setLoading={setLoading} postUrl={`admin/schedule`} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 pt-4 pl-4">
          <h4 className="card-subtitle">Delivery</h4>
          <ul className="list-unstyled mt-3">
            {schedules?.map((schedule, i) => (
              <li className="mt-3" key={i}>
                <div className="card-open-button">
                  <button className="btn btn-success">Open</button>
                </div>

                <div className="d-flex align-items-center mt-1">
                  <span className="card-day">{schedule.pic_day_name}</span>
                  <span className="card-time">{schedule.de_s_time}</span>
                  <span className="from-to">to</span>
                  <span className="card-time">{schedule.de_e_time}</span>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6 pt-4 pl-4">
          <h4 className="card-subtitle">Pickup</h4>
          <ul className="list-unstyled mt-3">
            {schedules?.map((schedule, i) => (
              <li className="mt-3" key={i}>
                <div className="card-open-button">
                  <button className="btn btn-success">Open</button>
                </div>

                <div className="d-flex align-items-center mt-1">
                  <span className="card-day">{schedule.pic_day_name}</span>
                  <span className="card-time">{schedule.pic_s_time}</span>
                  <span className="from-to">to</span>
                  <span className="card-time">{schedule.pic_e_time}</span>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="s-card-bottom">
        <div className="d-flex align-items-center justify-content-end">
          <button className="btn btn-success">Save</button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCardPage;
