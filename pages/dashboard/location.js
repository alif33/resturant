import React from "react";
import Layout from "../../src/admin/layout/Layout";
import LocationForm from "../../src/admin/Location/LocationForm";
import Navbar from "../../src/admin/Navbar/Navbar";

const LocationPage = () => {
  return (
    <Layout>
      <Navbar status="Location" />
      <div className="row mt-4">
        <div className="col-12">
          <LocationForm />
        </div>
      </div>
    </Layout>
  );
};

export default LocationPage;
