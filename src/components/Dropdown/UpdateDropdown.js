import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import AddCategoryModal from "../../modal/addCategory/AddCategoryModal";

const UpdateDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  const router = useRouter();
  const { shopId } = router.query;

  return (
    <div className="btn-group float-md-left mr-1 mb-1">
      <button
        onClick={() => setDropdown(!dropdown)}
        className="btn btn-success btn-lg dropdown-toggle"
      >
        Complete update
      </button>
      {dropdown && (
        <div className="dropdown-menu dropdown">
          <Link href="/admin/restadfgurant">
            <a className="dropdown-item">Capy Menu</a>
          </Link>
          <Link href="/admin/resasdtaurant">
            <a className="dropdown-item">Delete Menu</a>
          </Link>
          <Link href="/admin/reasstaurant">
            <a className="dropdown-item">Export Menu</a>
          </Link>
          <Link href="/admin/restasaurant">
            <a className="dropdown-item">Import Menu</a>
          </Link>
          <Link href="/admin/restasaurant">
            <a className="dropdown-item">View Menu Backups</a>
          </Link>
          <Link href="/admin/resastaurant">
            <a className="dropdown-item">View Menu Logs</a>
          </Link>
          <Link href="/admin/restafurant">
            <a className="dropdown-item">View Printable Menu</a>
          </Link>
          <div className="border-bottom"></div>
          <AddCategoryModal dropdown={dropdown} setDropdown={setDropdown} />
          <Link href="asdf">
            <a className="dropdown-item">Sort Categroies</a>
          </Link>
          <Link href="asdf">
            <a className="dropdown-item">Show Empty Categories</a>
          </Link>
          <div className="border-bottom"></div>
          <Link href={`/admin/restaurant/${shopId}/add-product`}>
            <a className="dropdown-item">Add New Product</a>
          </Link>
          <div className="border-bottom"></div>
          <Link href="erf">
            <a className="dropdown-item">Show Shared Addons</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UpdateDropdown;
