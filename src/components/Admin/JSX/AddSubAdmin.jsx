import React, { useEffect, useState } from "react";

// import "../Style/BoxModal.css";
import FormField from "../../Form/FormField";
import DropdownSelect from "../../DropdownSelect";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../../../hooks";
import { addSubAdmin } from "../../../api/admin";
import { isValidEmail } from "../../../utils/helper";

const defaultSubAdminInfo = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  roleName: "",
};

const validateSubAdminInfo = ({ firstName, lastName, phoneNumber, email }) => {
  const isValidName = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;

  if (!firstName.trim()) return { ok: false, error: "First name is missing!" };
  if (!isValidName.test(firstName) || !isValidName.test(lastName))
    return { ok: false, error: "Invalid name!" };

  if (!phoneNumber.trim())
    return { ok: false, error: "Phone number is missing!" };

  if (!email.trim()) return { ok: false, error: "Email is missing!" };
  if (!isValidEmail(email)) return { ok: false, error: "Invalid email!" };

  return { ok: true };
};

const AddSubAdmin = ({ isClosing, onClose }) => {
  const [subAdminInfo, setSubAdminInfo] = useState({ ...defaultSubAdminInfo });
  const [busy, setBusy] = useState(false);

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    doctorSpeciality: "",
  });
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null); // Track dropdown globally

  const navigate = useNavigate();
  const { updateNotification } = useNotification();

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormData({ ...formData, [id]: value });
  // };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setSubAdminInfo({ ...subAdminInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    setBusy(true);

    e.preventDefault();
    const { ok, error } = validateSubAdminInfo(subAdminInfo);

    if (!ok) {
      setBusy(false);
      return updateNotification("error", error);
    }
    console.log(subAdminInfo);
    const response = await addSubAdmin(subAdminInfo);

    setBusy(false);

    if (response.error) return updateNotification("error", response.error);

    setSubAdminInfo({ ...defaultSubAdminInfo });

    navigate("/auth/sub-admin", {
      state: { user: response.user },
      replace: true,
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".select-menu")) {
        setActiveDropdownIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const { firstName, lastName, phoneNumber, email } = subAdminInfo;
  return (
    <div className={`box-modal ${isClosing ? "closing" : ""}`}>
      <div className="internal-modal">
        <div className="box-heading">
          <h2>Add Sub Admins</h2>
        </div>

        <form onSubmit={!busy ? handleSubmit : null}>
          <div className="row">
            <div className="col-12">
              <FormField
                value={firstName}
                onChange={handleChange}
                name="firstName"
                label="First Name"
                placeholder="First name"
                type="text"
              />
            </div>

            <div className="col-12">
              <FormField
                value={lastName}
                onChange={handleChange}
                name="lastName"
                label="Last Name"
                placeholder="Last name"
                type="text"
              />
            </div>

            <div className="col-12">
              <FormField
                value={email}
                onChange={handleChange}
                name="email"
                label="Email ID"
                placeholder="Email ID"
                type="email"
              />
            </div>

            <div className="col-12">
              <FormField
                value={phoneNumber}
                onChange={handleChange}
                name="phoneNumber"
                label="Phone Number"
                placeholder="Phone Number"
                type="tel"
              />
            </div>

            <div className="col-12">
              <div className="form_field mb-3">
                <label>Sub-Admin Role</label>
                <DropdownSelect
                  defaultClass="default-value"
                  defaultValue="Select Sub-Admin Type"
                  options={["Coordinator", "Audit Manager"]}
                  index={0} // Unique index for tracking
                  activeDropdownIndex={activeDropdownIndex}
                  setActiveDropdownIndex={setActiveDropdownIndex}
                  //   includeLabel={true} // shows "Select State" label
                  //   onChange={handleDropdownChange}
                />
              </div>
            </div>

            <div className="box-buttons">
              <button
                type="button"
                className="btn cancel-btn"
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn save-btn"
                style={{ width: "150px" }}
              >
                Add Sub-Admin
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSubAdmin;
