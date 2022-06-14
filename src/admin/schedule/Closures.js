import { useState, useEffect } from "react";
import ScheduleAdd from "../../modal/scheduleAdd/ScheduleAdd";
import ScheduleCart from "./scheduleCart/ScheduleCart";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setClosure } from "../../../store/schedule/actions";

const Closures = () => {
  const [loading, setLoading] = useState(false);
  const [schedules, setSchedules] = useState([]);

  const router = useRouter();
  const { shopId } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    if (shopId) {
      dispatch(setClosure(`schedules/closures/${shopId}`));
    }
  }, [shopId, loading, dispatch]);

  const { schedule } = useSelector((state) => state);
  useEffect(() => {
    setSchedules(schedule.closureList);
  }, [schedule]);

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
        deleteUrl={`admin/schedule/closure`}
        schedules={schedules}
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
