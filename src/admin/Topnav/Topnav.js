import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon, MobileMenuIcon } from "../../components/svg";
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Input,
} from "reactstrap";
import TopnavEasyAccess from "./TopnavEasyAccess";
import TopnavNotifications from "./TopnavNotifications";

const Topnav = ({
  intl,
  history,
  containerClassnames,
  menuClickCount,
  selectedMenuHasSubItems,
  locale,
  setContainerClassnamesAction,
  clickOnMobileMenuAction,
  changeLocaleAction,
}) => {
  const [isInFullScreen, setIsInFullScreen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const search = () => {
    history.push(`${searchPath}?key=${searchKeyword}`);
    setSearchKeyword("");
  };

  const handleChangeLocale = (_locale, direction) => {
    changeLocaleAction(_locale);

    const currentDirection = getDirection().direction;
    if (direction !== currentDirection) {
      setDirection(direction);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  };

  const isInFullScreenFn = () => {
    return (
      (document.fullscreenElement && document.fullscreenElement !== null) ||
      (document.webkitFullscreenElement &&
        document.webkitFullscreenElement !== null) ||
      (document.mozFullScreenElement &&
        document.mozFullScreenElement !== null) ||
      (document.msFullscreenElement && document.msFullscreenElement !== null)
    );
  };

  const handleSearchIconClick = (e) => {
    if (window.innerWidth < menuHiddenBreakpoint) {
      let elem = e.target;
      if (!e.target.classList.contains("search")) {
        if (e.target.parentElement.classList.contains("search")) {
          elem = e.target.parentElement;
        } else if (
          e.target.parentElement.parentElement.classList.contains("search")
        ) {
          elem = e.target.parentElement.parentElement;
        }
      }

      if (elem.classList.contains("mobile-view")) {
        search();
        elem.classList.remove("mobile-view");
        removeEventsSearch();
      } else {
        elem.classList.add("mobile-view");
        addEventsSearch();
      }
    } else {
      search();
    }
    e.stopPropagation();
  };

  const handleDocumentClickSearch = (e) => {
    let isSearchClick = false;
    if (
      e.target &&
      e.target.classList &&
      (e.target.classList.contains("navbar") ||
        e.target.classList.contains("simple-icon-magnifier"))
    ) {
      isSearchClick = true;
      if (e.target.classList.contains("simple-icon-magnifier")) {
        search();
      }
    } else if (
      e.target.parentElement &&
      e.target.parentElement.classList &&
      e.target.parentElement.classList.contains("search")
    ) {
      isSearchClick = true;
    }

    if (!isSearchClick) {
      const input = document.querySelector(".mobile-view");
      if (input && input.classList) input.classList.remove("mobile-view");
      removeEventsSearch();
      setSearchKeyword("");
    }
  };

  const removeEventsSearch = () => {
    document.removeEventListener("click", handleDocumentClickSearch, true);
  };

  const addEventsSearch = () => {
    document.addEventListener("click", handleDocumentClickSearch, true);
  };

  const handleSearchInputKeyPress = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const toggleFullScreen = () => {
    const isFS = isInFullScreenFn();

    const docElm = document.documentElement;
    if (!isFS) {
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
      }
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setIsInFullScreen(!isFS);
  };

  const handleLogout = () => {
    console.log("logout");
  };

  const menuButtonClick = (e, _clickCount, _conClassnames) => {
    e.preventDefault();

    setTimeout(() => {
      const event = document.createEvent("HTMLEvents");
      event.initEvent("resize", false, false);
      window.dispatchEvent(event);
    }, 350);
    setContainerClassnamesAction(
      _clickCount + 1,
      _conClassnames,
      selectedMenuHasSubItems
    );
  };

  const mobileMenuButtonClick = (e, _containerClassnames) => {
    e.preventDefault();
    clickOnMobileMenuAction(_containerClassnames);
  };

  //   const { messages } = intl;

  return (
    <nav className="navbar fixed-top">
      <div className="d-flex align-items-center navbar-left">
        <Link href="/">
          <a
            className="menu-button d-none d-md-block"
            location={{}}
            onClick={(e) =>
              menuButtonClick(e, menuClickCount, containerClassnames)
            }
          >
            <MenuIcon />
          </a>
        </Link>
        <Link href="/">
          <a
            className="menu-button-mobile d-xs-block d-sm-block d-md-none"
            onClick={(e) => mobileMenuButtonClick(e, containerClassnames)}
          >
            <MobileMenuIcon />
          </a>
        </Link>

        <div className="search">
          <Input
            name="searchKeyword"
            id="searchKeyword"
            placeholder="search.."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyPress={(e) => handleSearchInputKeyPress(e)}
          />
          <span
            className="search-icon"
            onClick={(e) => handleSearchIconClick(e)}
          >
            <i className="simple-icon-magnifier" />
          </span>
        </div>

        <div className="d-inline-block">
          <UncontrolledDropdown className="ml-2">
            <DropdownToggle
              caret
              color="light"
              size="sm"
              className="language-button"
            >
              <span className="name">{locale}EN</span>
            </DropdownToggle>

            <DropdownMenu className="mt-3" right>
              {/* {localeOptions.map((l) => {
                return (
                  <DropdownItem
                    onClick={() => handleChangeLocale(l.id, l.direction)}
                    key={l.id}
                  >
                    {l.name}
                  </DropdownItem>
                );
              })} */}

              <DropdownItem>English - LTR</DropdownItem>
              <DropdownItem>Español</DropdownItem>
              <DropdownItem>English - RTL</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
      <Link href="/">
        <a className="navbar-logo">
          <span className="logo d-none d-xs-block" />
          <span className="logo-mobile d-block d-xs-none" />
        </a>
      </Link>

      <div className="navbar-right">
        {/* {isDarkSwitchActive && <TopnavDarkSwitch />} */}
        <div className="header-icons d-inline-block align-middle">
          <TopnavEasyAccess />
          <TopnavNotifications />
          <button
            className="header-icon btn btn-empty d-none d-sm-inline-block"
            type="button"
            id="fullScreenButton"
            onClick={toggleFullScreen}
          >
            {isInFullScreen ? (
              <i className="simple-icon-size-actual d-block" />
            ) : (
              <i className="simple-icon-size-fullscreen d-block" />
            )}
          </button>
        </div>
        <div className="user d-inline-block">
          <UncontrolledDropdown className="dropdown-menu-right">
            <DropdownToggle className="p-0" color="empty">
              <span className="name mr-1">Sarah Kortney</span>
              <span>
                <img alt="Profile" src="/assets/img/profiles/l-1.jpg" />
              </span>
            </DropdownToggle>
            <DropdownMenu className="mt-3" right>
              <DropdownItem>Account</DropdownItem>
              <DropdownItem>Features</DropdownItem>
              <DropdownItem>History</DropdownItem>
              <DropdownItem>Support</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => handleLogout()}>
                Sign out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </nav>
  );
};

export default Topnav;
