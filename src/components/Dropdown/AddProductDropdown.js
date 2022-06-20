import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { setCategories } from "../../../store/catrgories/actions";
import { useDispatch, useSelector } from "react-redux";

const AddProductDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  const router = useRouter();
  const { shopId } = router.query;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategories());
  }, [dispatch, dropdown]);

  const { categories } = useSelector((state) => state);

  return (
    <div className="btn-group show">
      <Link href={`/admin/restaurant/${shopId}/add-product`}>
        <a className="btn btn-outline-dark btn-lg px-4">add product</a>
      </Link>

      {/* <button
        type="button"
        className="btn btn-outline-dark btn-lg  dropdown-toggle dropdown-toggle-split"
        onClick={() => setDropdown(!dropdown)}
      >
        <span className="sr-only">Toggle Dropdown</span>
      </button> */}
      {dropdown && (
        <div
          className="dropdown-menu dropdown-menu-right show"
          // style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-73px, 43px, 0px);"
        >
          {categories?.categoryList?.map((item) => (
            <Link href={item._id} key={item._id}>
              <a className="dropdown-item">{item.categoryName}</a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddProductDropdown;
