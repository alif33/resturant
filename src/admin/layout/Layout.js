import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Topnav from "../Topnav/Topnav";

const Layout = ({children, history }) => {
  return (
    <div className="app-main-container">
      <Topnav history={history} />
      {/* <Sidebar /> */}
      <main>
        <div className="container-fluid">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export const Layout2 = ({children, history }) => {
  return (
    <div id="app-container">
      <Topnav history={history} />
      <Sidebar />
      <main>
        <div className="container-fluid">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
