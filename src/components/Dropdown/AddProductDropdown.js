import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const AddProductDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  const router = useRouter();
  const { shopId } = router.query;

  return (
    <div className="btn-group show">
      <Link href={`/admin/restaurant/${shopId}/add-product`}>
        <a className="btn btn-outline-dark btn-lg px-4">add product</a>
      </Link>

      <button
        type="button"
        className="btn btn-outline-dark btn-lg  dropdown-toggle dropdown-toggle-split"
        onClick={() => setDropdown(!dropdown)}
      >
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      {dropdown && (
        <div
          className="dropdown-menu dropdown-menu-right show"
          // style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-73px, 43px, 0px);"
        >
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
        </div>
      )}
    </div>
  );
};

export default AddProductDropdown;
