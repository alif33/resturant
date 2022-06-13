import Link from "next/link";

const Navbar = ({ status, shopId }) => {
  const menuList = [
    { item: "Dashboard", link: `/restaurant/${shopId}` },
    { item: "Settings", link: `/restaurant/${shopId}/setting` },
    { item: "Payments", link: `/restaurant/${shopId}/payment` },
    { item: "SEO Settings", link: `/restaurant/${shopId}/seo-setting` },
    { item: "Location", link: `/restaurant/${shopId}/location` },
    { item: "Contact", link: `/restaurant/${shopId}/contact` },
    { item: "Ordering", link: `/restaurant/${shopId}/ordering` },
    { item: "Statements", link: `/restaurant/${shopId}/statement` },
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
