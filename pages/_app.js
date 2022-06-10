import "../styles/globals.css";
import "../styles/css/vendor/bootstrap.min.css";
import "../styles/css/dore.light.blueolympic.css";
import "../styles/css/main.css";
import "../styles/font/iconsmind-s/css/iconsminds.css";
import "../styles/font/simple-line-icons/css/simple-line-icons.css";
import { Provider } from "react-redux";
import { store } from "../store";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    </>
  );
}

export default MyApp;
