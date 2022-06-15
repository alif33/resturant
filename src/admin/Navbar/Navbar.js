import Link from "next/link";

const Navbar = ({ status, shopId }) => {
  const menuList = [
    { item: "Dashboard", link: `${shopId}` },
    { item: "Settings", link: `${shopId}/setting` },
    { item: "Payments", link: `${shopId}/payment` },
    { item: "SEO Settings", link: `${shopId}/seo-setting` },
    { item: "Location", link: `${shopId}/location` },
    { item: "Contact", link: `${shopId}/contact` },
    { item: "Ordering", link: `${shopId}/ordering` },
    { item: "Statements", link: `${shopId}/statement` },
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
