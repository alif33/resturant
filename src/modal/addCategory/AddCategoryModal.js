import Popup from "reactjs-popup";
import AddCategoryForm from "./AddCategoryForm";

const AddCategoryModal = ({dropdown, setDropdown}) => {
  return (
    <Popup
      trigger={<a className="dropdown-item">Add New Category</a>}
      modal
      nested
      className="popup-content2"
    >
      {(close) => (
        <div className="editModal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <AddCategoryForm close={close} dropdown={dropdown} setDropdown={setDropdown}  />
        </div>
      )}
    </Popup>
  );
};

export default AddCategoryModal;
