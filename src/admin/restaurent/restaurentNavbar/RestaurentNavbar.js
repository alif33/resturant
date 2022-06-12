import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { postData } from "../../../../__lib__/helpers/HttpService";

const RestaurentNavbar = ({ status }) => {
  const [desable, setDesable] = useState(false);

  const newData = [
    { item: `Search Shop's`, link: "search-shop", id: "searchshop" },
    { item: "Add New shop ", link: "add-shop", id: "addshop" },
    { item: "Live Shops", link: "live-shop", id: "liveshop" },
    { item: "Disabled Shops", link: "disabled-shop", id: "disabledshop" },
    { item: "M2M Shops", link: "m2m-shop", id: "m2mshops" },
    { item: "Temporary Paused Shops", link: "temporarily-paused", id: "pausedshops" },
  ];

  const addNewsShop = () => {
    console.log("add shop");
    postData("/admin/shop", { name: "newshop" }, setDesable).then((res) => {
      toast.success(res.message);
    });
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {newData.map((listItem, i) => (
          <li
            className="nav-item"
            key={i}
          >
            <Link href={`/restaurants/${listItem.link}`}>
              <a
                className={
                  status === listItem.id ? "active nav-link" : "nav-link"
                }
              >
                {listItem.item}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RestaurentNavbar;
