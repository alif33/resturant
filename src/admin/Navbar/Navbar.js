import Link from "next/link";

const Navbar = ({ status }) => {
  const menuList = [
    { item: "Dashboard", link: "/dashboard" },
    { item: "Settings", link: "/dashboard/setting" },
    { item: "Payments", link: "/dashboard/payment" },
    { item: "SEO Settings", link: "/dashboard/seo-setting" },
    { item: "Location", link: "/dashboard/location" },
    { item: "Contact", link: "/dashboard/contact" },
    { item: "Ordering", link: "/dashboard/ordering" },
    { item: "Statements", link: "/dashboard/statement" },
    ,
  ];
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h1>#57669 Angelo&apos;s Stuffed Pizza</h1>
            <p className="card-text">
              Restaurant Status: <b>Onboarding</b> | Resaurant Type:
              <b>Shop Paid</b>
            </p>
            <div className="header-menu">
              <ul className="list-unstyled">
                {menuList.map((menuItem, i) => (
                  <li key={i} className={status === menuItem.item ? "active" : "not"}>
                    <Link href={menuItem.link}>
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
