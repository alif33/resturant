import Popup from "reactjs-popup";
import EditModalForm from "./EditModalForm";
import { BsPencilSquare } from "react-icons/bs";

const EditModal = ({productId, load, setLoad}) => {
    return (
        <Popup
        trigger={ <button className="btn btn-outline-dark">
        <BsPencilSquare /> Edit
      </button>}
        modal
      >
        {(close) => (
          <div className="eidtModal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <EditModalForm close={close} productId={productId} setLoad={setLoad} load={load} />
          </div>
        )}
      </Popup>
    );
};

export default EditModal;