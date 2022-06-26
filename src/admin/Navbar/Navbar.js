import Link from "next/link";
import { useEffect, useState } from "react";
import { getData } from "../../../__lib__/helpers/HttpService";

const Navbar = ({ status, shopId }) => {
  const [shop, setShop] = useState({});

  const menuList = [
    { item: "Dashboard", link: `${shopId}` },
    { item: "Settings", link: `${shopId}/setting` },
    { item: "Payments", link: `${shopId}/payment` },
    { item: "SEO Settings", link: `${shopId}/seo-setting` },
    { item: "Location", link: `${shopId}/location` },
    { item: "Contact", link: `${shopId}/contact` },
    { item: "Ordering", link: `${shopId}/ordering` },
    // { item: "Statements", link: `${shopId}/statement` },
    ,
  ];

  useEffect(() => {
    shopId && getData(`admin/shop/${shopId}`).then((res) => setShop(res));
  }, [shopId]);

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h1>
              {" "}
              {shop?._id?.slice(-5, shop?._id.length)} {shop?.shop_name}
            </h1>
            <p className="card-text">
              Restaurant Status: <b> {shop?.shop_status}</b> | Resaurant Type:
              <b> {shop?.shop_pay_type}</b>
            </p>
            <div className="header-menu">
              <ul className="list-unstyled">
                {menuList.map((menuItem, i) => (
                  <li
                    key={i}
                    className={status === menuItem.item ? "active" : "not"}
                  >
                    <Link href={`/admin/restaurant/${menuItem.link}`}>
                      <a>{menuItem.item}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
