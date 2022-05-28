/* eslint-disable @next/next/no-sync-scripts */
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/images/logo.png"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* <link
            rel="stylesheet"
            href="font/font/iconsmind-s/css/iconsminds.css"
          />

          <link
            rel="stylesheet"
            href="font/font/simple-line-icons/css/simple-line-icons.css"
          /> */}

          {/* 
          <link rel="stylesheet" href="css/vendor/bootstrap.rtl.only.min.css" />
          <link rel="stylesheet" href="css/vendor/fullcalendar.min.css" />
          <link
            rel="stylesheet"
            href="css/vendor/dataTables.bootstrap4.min.css"
          />
          <link
            rel="stylesheet"
            href="css/vendor/datatables.responsive.bootstrap4.min.css"
          />
          <link rel="stylesheet" href="css/vendor/select2.min.css" />
          <link rel="stylesheet" href="css/vendor/perfect-scrollbar.css" />
          <link rel="stylesheet" href="css/vendor/glide.core.min.css" />
          <link rel="stylesheet" href="css/vendor/bootstrap-stars.css" />
          <link rel="stylesheet" href="css/vendor/nouislider.min.css" />
          <link
            rel="stylesheet"
            href="css/vendor/bootstrap-datepicker3.min.css"
          />
          <link
            rel="stylesheet"
            href="css/vendor/component-custom-switch.min.css"
          /> */}
          <link rel="stylesheet" href="css/vendor/bootstrap.min.css" />
          <link rel="stylesheet" href="css/dore.light.blueolympic.css" />
          <link rel="stylesheet" href="css/main.css" />
        </Head>
        <body
          id="app-container"
          className="ltr rounded menu-default menu-sub-hidden"
        >
          <Main />
          <NextScript />
          {/* <script src="/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script> */}
        </body>
      </Html>
    );
  }
}


export default MyDocument;
