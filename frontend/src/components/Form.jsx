import React, { useState } from "react";
import axios from 'axios';
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
import Style from "./Form.module.css";
import Button from "./Button/Button";

const Form = () => {
  const [formData, setFormData] = useState({
    // memono: "",
    receivedDate: "",
    name: "",
    address: "",
    phone: "",
    whatsapp: "",
    email: "",
    depositedBy: "",
    depositerName: "",
    item: "",
    accessories: "",
    serialNo: "",
    problems: "",
    billNo: "",
    billDate: "",
    warranty: "",
    standby: "",
    // password: "",
    // signature: "",
  });

  const initialForm = {
    receivedDate: "",
    name: "",
    address: "",
    phone: "",
    whatsapp: "",
    email: "",
    depositedBy: "",
    depositerName: "",
    item: "",
    accessories: "",
    serialNo: "",
    problems: "",
    billNo: "",
    billDate: "",
    warranty: "",
    standby: "",
    // password: "",
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
    try {
      const response = await axios.post('https://service-management-ashy.vercel.app/api/jobs', formData);
      console.log(response.data); // Handle success response
      setSubmissionStatus(true);

    } catch (error) {
      console.error('Error submitting form:', error); // Handle error
      setSubmissionStatus(false);

    }
    finally {
      // Refresh the page
      window.location.reload();
    }
    // Here you can send jsonData to your backend or perform any other action
  };

  return (
    <div className={Style.Form}>
      <div className={Style.Form_box_mid}>
        <form onSubmit={handleSubmit}>
          <div className={Style.Form_section_title}>
            <h1>Material Receive</h1>
          </div>
          {/* <div className={Style.Form_box_input}>
            <label htmlFor="memono">Memo No</label>
            <input
              type="text"
              name="memono"
              placeholder="#####"
              className={Style.Form_box_input_userName}
              onChange={handleInputChange}
              required
            />
          </div> */}

          <div className={Style.Form_box_input}>
            <label htmlFor="recievedDate">Recieve Date</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <HiOutlineCalendar />
              </div>
              <input
                type="date"
                name="receivedDate"
                placeholder="dd-mm-yyyy hh:mm:ss"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={Style.Form_box_input_userName}
              onChange={handleInputChange}
              required
            />
            {/* <textarea
              name="name"
              cols="30"
              rows="6"
              placeholder="something about yourself in few words"
              onChange={handleInputChange}
              required
            ></textarea> */}
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="address">Address</label>
            <div>
              <textarea
                name="address"
                cols="30"
                rows="6"
                placeholder="your address"
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="phone">Phone No</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlinePhone />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone No"
                onChange={handleInputChange}
                pattern="[0-9]{10}" // Only allows exactly 10 numerical digits
                maxLength="10" // Restricts the input to 10 characters
                required
              />
            </div>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="whatsapp">WhatsApp No</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineWhatsapp />
              </div>
              <input
                type="tel"
                name="whatsapp"
                placeholder="whatsapp no"
                pattern="[0-9]{10}" // Only allows exactly 10 numerical digits
                maxLength="10" // Restricts the input to 10 characters
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="email">Email</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineMail />
              </div>
              <input
                type="email"
                name="email"
                placeholder="abc@xyz.com"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="depositedBy">Deposited By</label>
            <div>
              <select
                name="depositedBy"
                className={Style.Form_box_input_userName}
                onChange={handleInputChange}
                required
              >
                <option value="">Select an option</option>
                <option value="Self">Self</option>
                <option value="Engineer">Engineer</option>
                <option value="Others">Others</option>

                {/* <option value="creditcard">Credit Card</option> */}
              </select>
            </div>
            {formData.depositedBy === "Engineer" ||
            formData.depositedBy === "Others" ? (
              <input
                type="text"
                name="depositerName"
                placeholder="Enter depositer's name"
                className={Style.Form_box_input_userName}
                onChange={handleInputChange}
                required
              />
            ) : null}
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="item">Item</label>
            <div className={Style.Form_box_input_box}>
              <input
                type="text"
                className={Style.Form_box_input_userName}
                name="item"
                placeholder="e.g. CPU"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="accessories">Accessories Taken</label>
            <div className={Style.Form_box_input_box}>
              <input
                type="text"
                className={Style.Form_box_input_userName}
                name="accessories"
                placeholder="e.g. mouse, keyboard etc..."
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="serialNo">Serial No</label>
            <input
              type="text"
              name="serialNo"
              placeholder="#####"
              className={Style.Form_box_input_userName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="problems">
              Problems {"("}For PC or Laptop Extra Details Required {")"}
            </label>
            <div>
              <textarea
                name="problems"
                cols="30"
                rows="6"
                placeholder="e.g. Starting problem, booting problem, charging port problem etc."
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="billNo">Bill/AMC No</label>
            <input
              type="text"
              name="billNo"
              placeholder="#####"
              className={Style.Form_box_input_userName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="billDate">Bill/AMC Date</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <HiOutlineCalendar />
              </div>
              <input
                type="date"
                name="billDate"
                placeholder="dd-mm-yyyy"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="warranty">Warranty</label>
            <div Style={"display:flex;"}>
              <label >
                <input
                  type="radio"
                  name="warranty"
                  value="true"
                  onChange={handleInputChange}
                  required
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="warranty"
                  value="false"
                  onChange={handleInputChange}
                  required
                />
                No
              </label>
            </div>
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="standby">Stand By</label>
            <div Style={"display:flex;"}>
              <label>
                <input
                  type="radio"
                  name="standby"
                  value="true"
                  onChange={handleInputChange}
                  required
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="standby"
                  value="false"
                  onChange={handleInputChange}
                  required
                />
                No
              </label>
            </div>
          </div>

          {/* <div className={Style.Form_box_input}>
            <label htmlFor="password">Pasword</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlinePassword />
              </div>
              <input
                type="password"
                name="password"
                placeholder="37e3uyj099#*u"
                onChange={handleInputChange}
                required
              />
            </div>
          </div> */}
          {/* <div className={Style.Form_box_input}>
            <label htmlFor="signature">Recieved By Signature</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineVerified />
              </div>
              <input
                type="text"
                name="signature"
                placeholder=""
                onChange={handleInputChange}
                required
              />
            </div>
          </div> */}
          <div className={Style.Form_box_btn}>
            <Button
              btnName="Submit"
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

export default Form;
