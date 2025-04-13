import React from "react";
import TBox from "../../TBox";
import TopNav from "../../Navbar/JSX/TopNav";
import SideNav from "../../Navbar/JSX/SideNav";
import SubAdminRow from "./SubAdminRow";
import "../Style/SubAdmin.css";

const SubAdmin = () => {
  return (
    <>
      <TopNav />
      <SideNav />
      <main>
        <section id="sub-admin-section">
          <div className="sub-admin-header">
            <h4>Sub-Admin</h4>
            <button>
              <img src="/images/icon-plus-white.png" alt="icon-plus" />
              Add Sub Admin
            </button>
          </div>

          <div className="sub-admin-box">
            <TBox heading="Sub-Admin" />
            <table className="sub-admin-table">
              <thead>
                <tr>
                  <th>Sub Admin</th>
                  <th>Type</th>
                  <th>Role</th>
                  <th colSpan="2">Profile</th>
                </tr>
              </thead>
              <tbody>
                <SubAdminRow
                  name="Skylar Philips"
                  type="Coordinator"
                  role="Manage The Appointment"
                />
                <SubAdminRow
                  name="Tiana Ekstrom"
                  type="Audit Manager"
                  role="Manage The Appointment"
                />
                <SubAdminRow
                  name="Adison Gouse"
                  type="Coordinator"
                  role="Manage The Appointment"
                />
                <SubAdminRow
                  name="Marley Lipshutz"
                  type="Audit Manager"
                  role="Manage The Appointment"
                />
                <SubAdminRow
                  name="Omar Rhiel Madsen"
                  type="Audit Manager"
                  role="Manage The Appointment"
                />
              </tbody>
              <div className="pagination-data">
                <div>
                  <p>Showing Data 1 To 6</p>
                </div>
                <div>{/* pagination will be done here */}</div>
              </div>
            </table>
          </div>
        </section>
      </main>
    </>
  );
};

export default SubAdmin;
