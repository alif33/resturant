import "../styles/globals.css";
import "../styles/css/vendor/bootstrap.min.css";
import "../styles/css/dore.light.blueolympic.css";
import "../styles/css/main.css";
import "../styles/font/iconsmind-s/css/iconsminds.css";
import "../styles/font/simple-line-icons/css/simple-line-icons.css";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { createWrapper } from 'next-redux-wrapper';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../store';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
    </PersistGate>
  </Provider>
  </>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
