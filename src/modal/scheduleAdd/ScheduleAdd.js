import Popup from "reactjs-popup";
import ScheduleAddForm from "./ScheduleAddForm";


const ScheduleAdd = ({setLoading, postUrl}) => {
  return (
    <Popup
    trigger={<button className="btn btn-outline-danger">Add</button> }
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <ScheduleAddForm setLoading={setLoading} postUrl={postUrl} close={close} />
      </div>
    )}
  </Popup>
  );
};

export default ScheduleAdd;
