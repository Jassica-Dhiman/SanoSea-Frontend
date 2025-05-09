import React from "react";

import TBox from "../../TBox";

import Table from "../../Table";
import TopNav from "../../Navbar/JSX/TopNav";
import SideNav from "../../Navbar/JSX/SideNav";
import "../Style/Appointment.css";
import CompleteTbody from "./CompleteTbody";

const Complete = () => {
  return (
    <section id="appointment-table">
      <div className="appointment-body">
        <TBox heading="Completed" showDateTime={true} />

        {/* table */}

        <Table isPatient={true}>
          <CompleteTbody />
        </Table>
      </div>
    </section>
  );
};

export default Complete;
