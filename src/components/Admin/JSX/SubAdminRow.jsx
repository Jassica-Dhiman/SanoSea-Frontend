import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubAdminRow = ({ name, type, role }) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [status, setStatus] = useState("Active");

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const handleOptionClick = (option) => {
    setStatus(option);
    setDropdownActive(false);
  };

  return (
    <tr>
      <td>
        <div className="admin-profile">
          <img src="/images/person.jpg" alt="person" />
          <h5>{name}</h5>
        </div>
      </td>
      <td>
        <p className="admin-type">{type}</p>
      </td>
      <td>
        <p className="admin-role">{role}</p>
      </td>
      <td>
        <div className={`select-menu ${dropdownActive ? "active" : ""}`}>
          <div className="select-btn" onClick={toggleDropdown}>
            <span className="sBtn-text">{status}</span>
            <i className="bi bi-chevron-down"></i>
          </div>

          {dropdownActive && (
            <ul className="options">
              <li className="option label-option">
                <span className="option-text">Select State</span>
              </li>
              <li
                className="option"
                onClick={() => handleOptionClick("Active")}
              >
                <span className="option-text">Active</span>
              </li>
              <li
                className="option"
                onClick={() => handleOptionClick("Deactive")}
              >
                <span className="option-text">Deactive</span>
              </li>
              <li className="option">
                <span className="option-text">Edit</span>
              </li>
            </ul>
          )}
        </div>
      </td>
      <td>
        <div className="assigned-status-view-detail">
          <Link to="">View Detail</Link>
        </div>
      </td>
    </tr>
  );
};

export default SubAdminRow;
