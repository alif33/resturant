import React from "react";
import ContactForm from "../../src/admin/contact/ContactForm";
import Layout from "../../src/admin/layout/Layout";
import Navbar from "../../src/admin/Navbar/Navbar";

const ContactPage = () => {
  return (
    <Layout>
      <Navbar status="Contact" />
      <div className="row mt-4">
        <div className="col-12">
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
