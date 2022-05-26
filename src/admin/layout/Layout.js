import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Topnav from "../Topnav/Topnav";

const Layout = ({ containerClassnames, children, history }) => {
  return (
    <div id="app-container" className={containerClassnames}>
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
