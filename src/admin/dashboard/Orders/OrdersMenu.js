import Link from "next/link";

const OrdersMenu = () => {
  const menuList = [
    { item: "All", link: "/dashboard/order" },
    { item: "My Orders ", link: "/dashboard/order/my-orders " },
    { item: "Transferred", link: "/dashboard/order/Transferred " },
    { item: "Unconfirmed", link: "/dashboard/order/Unconfirmed" },
    { item: "Scheduled", link: "/dashboard/order/Scheduled" },
    { item: "Flagged", link: "/dashboard/order/Flagged" },
  ];

  const status = "All";
  return (
    <div className="row mt-4">
      <div className="col-12">
        <div className="header-menu">
          <ul className="list-unstyled">
            {menuList.map((menuItem, i) => (
              <li
                key={i}
                className={status === menuItem.item ? "active" : "not"}
              >
                <Link href={menuItem.link}>
                  <a>{menuItem.item}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrdersMenu;
