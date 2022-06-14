import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getData } from "../../../../__lib__/helpers/HttpService";

const ScheduleCart = ({ url, loading }) => {
  const [schedules, setSchedules] = useState([]);

  const router = useRouter();
  const { shopId } = router.query;

  useEffect(() => {
    if (shopId && url) {
      getData(`${url}/${shopId}`).then((res) => setSchedules(res));
    }
  }, [shopId, loading, url]);

  
  return (
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
  );
};

export default ScheduleCart;
