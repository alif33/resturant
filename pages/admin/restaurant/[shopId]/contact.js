import React from "react";
import { Layout2 } from "../../../../src/admin/layout/Layout";
import ContactForm from "../../../../src/admin/contact/ContactForm";
import Navbar from "../../../../src/admin/Navbar/Navbar";
import { useRouter } from "next/router";

const ContactPage = () => {
  const router = useRouter();
  const { shopId } = router?.query;
  return (
    <Layout2 shopId={shopId}>
      <Navbar status="Contact" shopId={shopId} />
      <div className="row mt-4">
        <div className="col-12">
          <ContactForm />
        </div>
      </div>
    </Layout2>
  );
};

export default ContactPage;
