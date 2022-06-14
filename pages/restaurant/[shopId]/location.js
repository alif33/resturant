import React from "react";
import { Layout2 } from "../../../src/admin/layout/Layout";
import LocationForm from "../../../src/admin/Location/LocationForm";
import Navbar from "../../../src/admin/Navbar/Navbar";

const LocationPage = () => {
  return (
    <Layout2>
      <Navbar status="Location" />
      <div className="row mt-4">
        <div className="col-12">
          <LocationForm />
        </div>
      </div>
    </Layout2>
  );
};

export default LocationPage;
