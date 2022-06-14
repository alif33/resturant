import React from "react";
import { Layout2 } from "../../../../src/admin/layout/Layout";
import ContactForm from "../../../../src/admin/contact/ContactForm";
import Navbar from "../../../../src/admin/Navbar/Navbar";

const ContactPage = () => {
  return (
    <Layout2>
      <Navbar status="Contact" />
      <div className="row mt-4">
        <div className="col-12">
          <ContactForm />
        </div>
      </div>
    </Layout2>
  );
};

export default ContactPage;
