import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { postData } from "../../../../__lib__/helpers/HttpService";
import SearchShop from "../searchShop/SearchShop";

const RestaurentNavbar = ({ status, searchInput, setSearchInput }) => {
  // const [desable, setDesable] = useState(false);

  const newData = [
    { item: "All shop's ", link: "", id: "allshop" },
    { item: "Add New shop ", link: "add-shop", id: "addshop" },
    { item: "Live Shops", link: "live-shop", id: "liveshop" },
    { item: "Disabled Shops", link: "disabled-shop", id: "disabledshop" },
    { item: "M2M Shops", link: "m2m-shop", id: "m2mshops" },
    {
      item: "Temporary Paused Shops",
      link: "temporarily-paused",
      id: "pausedshops",
    },
  ];
  console.log(searchInput);

  return (
    <nav className="navbar">
      <SearchShop searchInput={searchInput} setSearchInput={setSearchInput} />
      <ul className="navbar-nav">
        {newData.map((listItem, i) => (
          <li className="nav-item" key={i}>
            <Link href={`/admin/restaurants/${listItem.link}`}>
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
