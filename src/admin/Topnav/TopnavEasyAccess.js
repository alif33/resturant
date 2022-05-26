import Link from "next/link";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
// import IntlMessages from 'helpers/IntlMessages';

const TopnavEasyAccess = () => {
  return (
    <div className="position-relative d-none d-sm-inline-block">
      <UncontrolledDropdown className="dropdown-menu-right">
        <DropdownToggle className="header-icon" color="empty">
          <i className="simple-icon-grid" />
        </DropdownToggle>
        <DropdownMenu
          className="position-absolute mt-3"
          right
          id="iconMenuDropdown"
        >
          <Link href="/">
            <a className="icon-menu-item">
              <i className="iconsminds-shop-4 d-block" />
              {/* <IntlMessages id="menu.dashboards" /> */}
            </a>
          </Link>

          <Link href="/">
            <a className="icon-menu-item">
              <i className="iconsminds-pantone d-block" />{" "}
              {/* <IntlMessages id="menu.ui" /> */}
            </a>
          </Link>
          <Link href="/">
            <a className="icon-menu-item">
              <i className="iconsminds-bar-chart-4 d-block" />{" "}
              {/* <IntlMessages id="menu.charts" /> */}
            </a>
          </Link>
          <Link href="/">
            <a className="icon-menu-item">
              <i className="iconsminds-speach-bubble d-block" />{" "}
              {/* <IntlMessages id="menu.chat" /> */}
            </a>
          </Link>
          <Link href="/">
            <a className="icon-menu-item">
              <i className="iconsminds-formula d-block" />{" "}
              {/* <IntlMessages id="menu.survey" /> */}
            </a>
          </Link>
          <Link href="/">
            <a className="icon-menu-item">
              <i className="iconsminds-check d-block" />{" "}
              {/* <IntlMessages id="menu.todo" /> */}
            </a>
          </Link>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default TopnavEasyAccess;
