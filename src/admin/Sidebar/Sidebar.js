import React from "react";

const Sidebar = () => {
  return (
    <div className="menu">
      <div className="main-menu">
        <div className="scroll">
          <ul className="list-unstyled">
            <li className="active">
              <a href="#dashboard">
                <i className="iconsminds-shop-4"></i>
                <span>Dashboards</span>
              </a>
            </li>
            <li>
              <a href="#layouts">
                <i className="iconsminds-digital-drawing"></i> Pages
              </a>
            </li>
            <li>
              <a href="#applications">
                <i className="iconsminds-air-balloon-1"></i> Applications
              </a>
            </li>
            <li>
              <a href="#ui">
                <i className="iconsminds-pantone"></i> UI
              </a>
            </li>
            <li>
              <a href="#menu">
                <i className="iconsminds-three-arrow-fork"></i> Menu
              </a>
            </li>
            <li>
              <a href="Blank.Page.html">
                <i className="iconsminds-bucket"></i> Blank Page
              </a>
            </li>
            <li>
              <a
                href="https://dore-jquery-docs.coloredstrategies.com"
                target="_blank" rel="noreferrer"
              >
                <i className="iconsminds-library"></i> Docs
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="sub-menu">
        <div className="scroll">
          <ul className="list-unstyled" data-link="dashboard">
            <li className="active">
              <a href="Dashboard.Default.html">
                <i className="simple-icon-rocket"></i>{" "}
                <span className="d-inline-block">Default</span>
              </a>
            </li>
            <li>
              <a href="Dashboard.Analytics.html">
                <i className="simple-icon-pie-chart"></i>{" "}
                <span className="d-inline-block">Analytics</span>
              </a>
            </li>
            <li>
              <a href="Dashboard.Ecommerce.html">
                <i className="simple-icon-basket-loaded"></i>{" "}
                <span className="d-inline-block">Ecommerce</span>
              </a>
            </li>
            <li>
              <a href="Dashboard.Content.html">
                <i className="simple-icon-doc"></i>{" "}
                <span className="d-inline-block">Content</span>
              </a>
            </li>
          </ul>
          <ul className="list-unstyled" data-link="layouts" id="layouts">
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapseAuthorization"
                aria-expanded="true"
                aria-controls="collapseAuthorization"
                className="rotate-arrow-icon opacity-50"
              >
                <i className="simple-icon-arrow-down"></i>{" "}
                <span className="d-inline-block">Authorization</span>
              </a>
              <div id="collapseAuthorization" className="collapse show">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="Pages.Auth.Login.html">
                      <i className="simple-icon-user-following"></i>{" "}
                      <span className="d-inline-block">Login</span>
                    </a>
                  </li>
                  <li>
                    <a href="Pages.Auth.Register.html">
                      <i className="simple-icon-user-follow"></i>{" "}
                      <span className="d-inline-block">Register</span>
                    </a>
                  </li>
                  <li>
                    <a href="Pages.Auth.ForgotPassword.html">
                      <i className="simple-icon-user-unfollow"></i>{" "}
                      <span className="d-inline-block">Forgot Password</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapseProduct"
                aria-expanded="true"
                aria-controls="collapseProduct"
                className="rotate-arrow-icon opacity-50"
              >
                <i className="simple-icon-arrow-down"></i>{" "}
                <span className="d-inline-block">Product</span>
              </a>
              <div id="collapseProduct" className="collapse show">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="Pages.Product.List.html">
                      <i className="simple-icon-credit-card"></i>{" "}
                      <span className="d-inline-block">Data List</span>
                    </a>
                  </li>
                  <li>
                    <a href="Pages.Product.Thumbs.html">
                      <i className="simple-icon-list"></i>{" "}
                      <span className="d-inline-block">Thumb List</span>
                    </a>
                  </li>
                  <li>
                    <a href="Pages.Product.Images.html">
                      <i className="simple-icon-grid"></i>{" "}
                      <span className="d-inline-block">Image List</span>
                    </a>
                  </li>
                  <li>
                    <a href="Pages.Product.Detail.html">
                      <i className="simple-icon-book-open"></i>{" "}
                      <span className="d-inline-block">Detail</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapseProfile"
                aria-expanded="true"
                aria-controls="collapseProfile"
                className="rotate-arrow-icon opacity-50"
              >
                <i className="simple-icon-arrow-down"></i>{" "}
                <span className="d-inline-block">Profile</span>
              </a>
              <div id="collapseProfile" className="collapse show">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="Pages.Profile.Social.html">
                      <i className="simple-icon-share"></i>{" "}
                      <span className="d-inline-block">Social</span>
                    </a>
                  </li>
                  <li>
                    <a href="Pages.Profile.Portfolio.html">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Portfolio</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapseBlog"
                aria-expanded="true"
                aria-controls="collapseBlog"
                className="rotate-arrow-icon opacity-50"
              >
                <i className="simple-icon-arrow-down"></i>{" "}
                <span className="d-inline-block">Blog</span>
              </a>
              <div id="collapseBlog" className="collapse show">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="Pages.Blog.html">
                      <i className="simple-icon-list"></i>{" "}
                      <span className="d-inline-block">List</span>
                    </a>
                  </li>
                  <li>
                    <a href="Pages.Blog.Detail.html">
                      <i className="simple-icon-book-open"></i>{" "}
                      <span className="d-inline-block">Detail</span>
                    </a>
                  </li>
                  <li>
                    <a href="Pages.Blog.Detail.Alt.html">
                      <i className="simple-icon-picture"></i>{" "}
                      <span className="d-inline-block">Detail Alt</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapseMisc"
                aria-expanded="true"
                aria-controls="collapseMisc"
                className="rotate-arrow-icon opacity-50"
              >
                <i className="simple-icon-arrow-down"></i>{" "}
                <span className="d-inline-block">Miscellaneous</span>
              </a>
              <div id="collapseMisc" className="collapse show">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="Pages.Misc.Coming.Soon.html">
                      <i className="simple-icon-hourglass"></i>{" "}
                      <span className="d-inline-block">Coming Soon</span>
                    </a>
                  </li>
                  <li>
                    <a href="Pages.Misc.Error.html">
                      <i className="simple-icon-exclamation"></i>{" "}
                      <span className="d-inline-block">Error</span>
                    </a>
                  </li>
                  <li>
                    <a href="Pages.Misc.Faq.html">
                      <i className="simple-icon-question"></i>{" "}
                      <span className="d-inline-block">Faq</span>
                    </a>
                  </li>
                  <li>
                    <a href="Pages.Misc.Invoice.html">
                      <i className="simple-icon-bag"></i>{" "}
                      <span className="d-inline-block">Invoice</span>
                    </a>
                  </li>
                  <li>
                    <a href="Pages.Misc.Knowledge.Base.html">
                      <i className="simple-icon-graduation"></i>{" "}
                      <span className="d-inline-block">Knowledge Base</span>
                    </a>
                  </li>
                  <li>
                    <a href="Pages.Misc.Mailing.html">
                      <i className="simple-icon-envelope-open"></i>{" "}
                      <span className="d-inline-block">Mailing</span>
                    </a>
                  </li>
                  <li>
                    <a href="Pages.Misc.Pricing.html">
                      <i className="simple-icon-diamond"></i>{" "}
                      <span className="d-inline-block">Pricing</span>
                    </a>
                  </li>
                  <li>
                    <a href="Pages.Misc.Search.html">
                      <i className="simple-icon-magnifier"></i>{" "}
                      <span className="d-inline-block">Search</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <ul className="list-unstyled" data-link="applications">
            <li>
              <a href="Apps.MediaLibrary.html">
                <i className="simple-icon-picture"></i>{" "}
                <span className="d-inline-block">Library</span>
              </a>
            </li>
            <li>
              <a href="Apps.Todo.List.html">
                <i className="simple-icon-check"></i>{" "}
                <span className="d-inline-block">Todo</span>
              </a>
            </li>
            <li>
              <a href="Apps.Survey.List.html">
                <i className="simple-icon-calculator"></i>{" "}
                <span className="d-inline-block">Survey</span>
              </a>
            </li>
            <li>
              <a href="Apps.Chat.html">
                <i className="simple-icon-bubbles"></i>{" "}
                <span className="d-inline-block">Chat</span>
              </a>
            </li>
          </ul>
          <ul className="list-unstyled" data-link="ui">
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapseForms"
                aria-expanded="true"
                aria-controls="collapseForms"
                className="rotate-arrow-icon opacity-50"
              >
                <i className="simple-icon-arrow-down"></i>{" "}
                <span className="d-inline-block">Forms</span>
              </a>
              <div id="collapseForms" className="collapse show">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="Ui.Forms.Components.html">
                      <i className="simple-icon-event"></i>{" "}
                      <span className="d-inline-block">Components</span>
                    </a>
                  </li>
                  <li>
                    <a href="Ui.Forms.Layouts.html">
                      <i className="simple-icon-doc"></i>{" "}
                      <span className="d-inline-block">Layouts</span>
                    </a>
                  </li>
                  <li>
                    <a href="Ui.Forms.Validation.html">
                      <i className="simple-icon-check"></i>{" "}
                      <span className="d-inline-block">Validation</span>
                    </a>
                  </li>
                  <li>
                    <a href="Ui.Forms.Wizard.html">
                      <i className="simple-icon-magic-wand"></i>{" "}
                      <span className="d-inline-block">Wizard</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapseDataTables"
                aria-expanded="true"
                aria-controls="collapseDataTables"
                className="rotate-arrow-icon opacity-50"
              >
                <i className="simple-icon-arrow-down"></i>{" "}
                <span className="d-inline-block">Datatables</span>
              </a>
              <div id="collapseDataTables" className="collapse show">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="Ui.Datatables.Rows.html">
                      <i className="simple-icon-screen-desktop"></i>{" "}
                      <span className="d-inline-block">Full Page UI</span>
                    </a>
                  </li>
                  <li>
                    <a href="Ui.Datatables.Scroll.html">
                      <i className="simple-icon-mouse"></i>{" "}
                      <span className="d-inline-block">Scrollable</span>
                    </a>
                  </li>
                  <li>
                    <a href="Ui.Datatables.Pagination.html">
                      <i className="simple-icon-notebook"></i>{" "}
                      <span className="d-inline-block">Pagination</span>
                    </a>
                  </li>
                  <li>
                    <a href="Ui.Datatables.Default.html">
                      <i className="simple-icon-grid"></i>{" "}
                      <span className="d-inline-block">Default</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapseComponents"
                aria-expanded="true"
                aria-controls="collapseComponents"
                className="rotate-arrow-icon opacity-50"
              >
                <i className="simple-icon-arrow-down"></i>{" "}
                <span className="d-inline-block">Components</span>
              </a>
              <div id="collapseComponents" className="collapse show">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="Ui.Components.Alerts.html">
                      <i className="simple-icon-bell"></i>{" "}
                      <span className="d-inline-block">Alerts</span>
                    </a>
                  </li>
                  <li>
                    <a href="Ui.Components.Badges.html">
                      <i className="simple-icon-badge"></i>{" "}
                      <span className="d-inline-block">Badges</span>
                    </a>
                  </li>
                  <li>
                    <a href="Ui.Components.Buttons.html">
                      <i className="simple-icon-control-play"></i>{" "}
                      <span className="d-inline-block">Buttons</span>
                    </a>
                  </li>
                  <li>
                    <a href="Ui.Components.Cards.html">
                      <i className="simple-icon-layers"></i>{" "}
                      <span className="d-inline-block">Cards</span>
                    </a>
                  </li>

                  <li>
                    <a href="Ui.Components.Carousel.html">
                      <i className="simple-icon-picture"></i>{" "}
                      <span className="d-inline-block">Carousel</span>
                    </a>
                  </li>
                  <li>
                    <a href="Ui.Components.Charts.html">
                      <i className="simple-icon-chart"></i>{" "}
                      <span className="d-inline-block">Charts</span>
                    </a>
                  </li>
                  <li>
                    <a href="Ui.Components.Collapse.html">
                      <i className="simple-icon-arrow-up"></i>{" "}
                      <span className="d-inline-block">Collapse</span>
                    </a>
                  </li>
                  <li>
                    <a href="Ui.Components.Dropdowns.html">
                      <i className="simple-icon-arrow-down"></i>{" "}
                      <span className="d-inline-block">Dropdowns</span>
                    </a>
                  </li>
                  <li>
                    <a href="Ui.Components.Editors.html">
                      <i className="simple-icon-book-open"></i>{" "}
                      <span className="d-inline-block">Editors</span>
                    </a>
                  </li>
                  <li>
                    <a href="Ui.Components.Icons.html">
                      <i className="simple-icon-star"></i>{" "}
                      <span className="d-inline-block">Icons</span>
                    </a>
                  </li>
                  <li>
                    <a href="Ui.Components.InputGroups.html">
                      <i className="simple-icon-note"></i>{" "}
                      <span className="d-inline-block">Input Groups</span>
                    </a>
                  </li>
                  <li>
                    <a href="Ui.Components.Jumbotron.html">
                      <i className="simple-icon-screen-desktop"></i>{" "}
                      <span className="d-inline-block">Jumbotron</span>
                    </a>
                  </li>
                  <li>
                    <a href="Ui.Components.Modal.html">
                      <i className="simple-icon-docs"></i>{" "}
                      <span className="d-inline-block">Modal</span>
                    </a>
                  </li>
                  <li>
                    <a href="Ui.Components.Navigation.html">
                      <i className="simple-icon-cursor"></i>{" "}
                      <span className="d-inline-block">Navigation</span>
                    </a>
                  </li>

                  <li>
                    <a href="Ui.Components.PopoverandTooltip.html">
                      <i className="simple-icon-pin"></i>{" "}
                      <span className="d-inline-block">Popover & Tooltip</span>
                    </a>
                  </li>
                  <li>
                    <a href="Ui.Components.Sortable.html">
                      <i className="simple-icon-shuffle"></i>{" "}
                      <span className="d-inline-block">Sortable</span>
                    </a>
                  </li>
                  <li>
                    <a href="Ui.Components.Tables.html">
                      <i className="simple-icon-grid"></i>{" "}
                      <span className="d-inline-block">Tables</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <ul className="list-unstyled" data-link="menu" id="menuTypes">
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapseMenuTypes"
                aria-expanded="true"
                aria-controls="collapseMenuTypes"
                className="rotate-arrow-icon"
              >
                <i className="simple-icon-arrow-down"></i>{" "}
                <span className="d-inline-block">Menu Types</span>
              </a>
              <div
                id="collapseMenuTypes"
                className="collapse show"
                data-parent="#menuTypes"
              >
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="Menu.Default.html">
                      <i className="simple-icon-control-pause"></i>{" "}
                      <span className="d-inline-block">Default</span>
                    </a>
                  </li>
                  <li>
                    <a href="Menu.Subhidden.html">
                      <i className="simple-icon-arrow-left mi-subhidden"></i>{" "}
                      <span className="d-inline-block">Subhidden</span>
                    </a>
                  </li>
                  <li>
                    <a href="Menu.Hidden.html">
                      <i className="simple-icon-control-start mi-hidden"></i>{" "}
                      <span className="d-inline-block">Hidden</span>
                    </a>
                  </li>
                  <li>
                    <a href="Menu.Mainhidden.html">
                      <i className="simple-icon-control-rewind mi-hidden"></i>{" "}
                      <span className="d-inline-block">Mainhidden</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapseMenuLevel"
                aria-expanded="true"
                aria-controls="collapseMenuLevel"
                className="rotate-arrow-icon collapsed"
              >
                <i className="simple-icon-arrow-down"></i>{" "}
                <span className="d-inline-block">Menu Levels</span>
              </a>
              <div
                id="collapseMenuLevel"
                className="collapse"
                data-parent="#menuTypes"
              >
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="#">
                      <i className="simple-icon-layers"></i>{" "}
                      <span className="d-inline-block">Sub Level</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseMenuLevel2"
                      aria-expanded="true"
                      aria-controls="collapseMenuLevel2"
                      className="rotate-arrow-icon collapsed"
                    >
                      <i className="simple-icon-arrow-down"></i>{" "}
                      <span className="d-inline-block">Another Level</span>
                    </a>
                    <div id="collapseMenuLevel2" className="collapse">
                      <ul className="list-unstyled inner-level-menu">
                        <li>
                          <a href="#">
                            <i className="simple-icon-layers"></i>{" "}
                            <span className="d-inline-block">Sub Level</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapseMenuDetached"
                aria-expanded="true"
                aria-controls="collapseMenuDetached"
                className="rotate-arrow-icon collapsed"
              >
                <i className="simple-icon-arrow-down"></i>{" "}
                <span className="d-inline-block">Detached</span>
              </a>
              <div id="collapseMenuDetached" className="collapse">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="#">
                      <i className="simple-icon-layers"></i>{" "}
                      <span className="d-inline-block">Sub Level</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="dont-close-menu">
                <a href="#">
                  <i className="simple-icon-arrow-right"></i>{" "}
                  <span className="d-inline-block">Keep Sub Open</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
