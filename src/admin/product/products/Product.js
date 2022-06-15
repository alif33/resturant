import React from "react";
import AddProductDropdown from "../../../components/Dropdown/AddProductDropdown";
import UpdateDropdown from "../../../components/Dropdown/UpdateDropdown";
import MenuIcon2 from "../../../components/svg/MenuIcon2";
import { BsPencilSquare } from "react-icons/bs";
import { ImCopy } from "react-icons/im";
import { MdDelete } from "react-icons/md";

const ProductPage = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Menu: #55268 3.99 Pizza Company</h1>
          <UpdateDropdown />
        </div>
        <div className="border-bottom my-3"></div>
        <div className="d-flex align-items-center justify-content-end">
          <AddProductDropdown />
        </div>
        <h5 className="card-title">Striped Rows</h5>

        <div className="product-table">
          <ul>
            <li>
              <div className="product-name">
                <span>
                  <MenuIcon2 />
                </span>
                <h5>MenuIcon2</h5>
                <h4>MenuIcon2</h4>
              </div>
              <div className="product-action">
                <button className="btn btn-outline-dark">
                  <BsPencilSquare /> Edit
                </button>
                <button className="btn btn-info">
                  <ImCopy /> Copy
                </button>
                <button className="btn btn-danger"><MdDelete /> Delete</button>
              </div>
            </li>
            <li>
              <div className="product-name">
                <span>
                  <MenuIcon2 />
                </span>
                <h5>MenuIcon2</h5>
                <h4>MenuIcon2</h4>
              </div>
              <div className="product-action">
                <button className="btn btn-outline-dark">
                  <BsPencilSquare /> Edit
                </button>
                <button className="btn btn-info">
                  <ImCopy /> Copy
                </button>
                <button className="btn btn-danger"><MdDelete /> Delete</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
