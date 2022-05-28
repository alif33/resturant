import Link from "next/link";

const RestaurentNavbar = () => {
  const newData = [
    { item: `Search Shop's`, link: "#" },
    { item: "Add New shop ", link: "#" },
    { item: "Live Shops", link: "#" },
    { item: "Disabled Shops", link: "#" },
    { item: "M2M Shops", link: "#" },
    { item: "Temporary Paused Shops", link: "#" },
  ];
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {newData.map((listItem, i) => (
          <li className="nav-item" key={i}>
            <Link href={listItem.link}>
              <a className="nav-link">{listItem.item}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RestaurentNavbar;
