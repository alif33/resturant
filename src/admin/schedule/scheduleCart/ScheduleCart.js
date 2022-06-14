import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { deleteData, getData } from "../../../../__lib__/helpers/HttpService";

const ScheduleCart = ({ url, loading, setLoading, deleteUrl }) => {
  const [schedules, setSchedules] = useState([]);

  const router = useRouter();
  const { shopId } = router.query;

  useEffect(() => {
    if (shopId && url) {
      getData(`${url}/${shopId}`).then((res) => {
        setSchedules(res);
      });
    }
  }, [shopId, loading, url]);

  const deleteShedule = (id) => {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE3ZDY4YWJiNjQ5ODExYTFiN2FiYzMiLCJuYW1lIjoiSmFoaWQiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY1NTE2NjYwOSwiZXhwIjoxNjU3NzU4NjA5fQ.9SwaFI4kgXqdpoiuJN-LOr9zXNY6I0UNo7PGT4pEHU8`;

    deleteData(`${deleteUrl}/${id}`, token).then((res) => {
      if (res.success) {
        toast.success(res.message);
      }
      setLoading(!loading);
    });
  };

  return (
    <div className="row">
      {schedules.length === 0 && (
        <div className="col-12">
          <h3 className="text-center py-3">No schedules</h3>
        </div>
      )}
      {schedules.length > 0 && (
        <>
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
                    <button
                      onClick={() => deleteShedule(schedule._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
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
                    <button
                      onClick={() => deleteShedule(schedule._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ScheduleCart;
