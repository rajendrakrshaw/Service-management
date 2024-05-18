import React, { useState } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { HiOutlineCalendar, HiOutlineMail } from "react-icons/hi";
import {
  MdOutlineHttp,
  MdOutlineContentCopy,
  MdOutlineAdd,
  MdOutlineTextFields,
  MdOutlineLocationCity,
  MdOutlinePhone,
  MdOutlineMail,
  MdOutlinePassword,
  MdOutlineVerified, 
  MdOutlineWhatsapp,
} from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

// INTERNAL IMPORT
import Style from "./AssignEngineerForm.module.css";
import Button from "../Button/Button";

const ReceiveMaterialForm = () => {
    const location = useLocation();
    const { rowData, index } = location.state;
  
  const [formData, setFormData] = useState({
    memono: index,
    Engineer: "",
  });

  const initialForm = {
    memono: "",
    Engineer: "",
  }
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    if (!e) return; // Ensure e is defined
    e.preventDefault();
    // Convert formData to JSON format
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
    // try {
    //   const response = await axios.post('https://service-management-ashy.vercel.app/api/jobs', formData);
    //   console.log(response.data); // Handle success response
    //   setSubmissionStatus(true);

    // } catch (error) {
    //   console.error('Error submitting form:', error); // Handle error
    //   setSubmissionStatus(false);

    // }
    // finally {
    //   // Refresh the page
    //   window.location.reload();
    // }
    // Here you can send jsonData to your backend or perform any other action
  };

  return (
    <div className={Style.Form}>
      <div className={Style.Form_box_mid}>
        <form onSubmit={handleSubmit}>
          <div className={Style.Form_section_title}>
            <h1>Assign Engineer</h1>
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="memono">Memo No</label>
            <input
              type="text"
              name="memono"
              placeholder="#####"
              value={index}
              className={Style.Form_box_input_userName}
              onChange={handleInputChange}
              required
              readOnly
            />
          </div>
        <div className={Style.Form_box_input}>
            <label htmlFor="engineer">Engineer</label>
            <div>
              <select
                name="Engineer"
                className={Style.Form_box_input_userName}
                onChange={handleInputChange}
                required
              >
                <option value="">Select an Engineer</option>
                <option value="Raj">Raj</option>
                <option value="Rahul">Rahul</option>
                <option value="Atanu">Atanu</option>

                {/* <option value="creditcard">Credit Card</option> */}
              </select>
            </div>
          </div>
          <div className={Style.Form_box_btn}>
            <Button
              btnName="Assign"
              handleClick={handleSubmit}
              classStyle={Style.button}
              type="submit" // Ensure button type is set to "submit"
            />
            {/* Conditional rendering of submission message */}
          {submissionStatus === true && <p className={Style.successMessage}>Form submitted successfully!</p>}
          {submissionStatus === false && <p className={Style.errorMessage}>Failed to submit form. Please try again.</p>}

          </div>
        </form>
      </div>
    </div>
  );
};

export default ReceiveMaterialForm;
