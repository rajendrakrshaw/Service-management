import React, { useState } from "react";
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
    username: "",
    email: "",
    description: "",
    website: "",
    facebook: "",
    twitter: "",
    instagram: "",
    wallet: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    if (!e) return; // Ensure e is defined
    e.preventDefault();
    // Convert formData to JSON format
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
    // Here you can send jsonData to your backend or perform any other action
  };

  return (
    <div className={Style.Form}>
      <div className={Style.Form_box_mid}>
        <form onSubmit={handleSubmit}>
          <div className={Style.Form_section_title}>
            <h1>Material Recieve</h1>
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="memono">Memo No</label>
            <input
              type="text"
              name="memono"
              placeholder="#####"
              className={Style.Form_box_input_userName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="reciecedate">Recieve Date & Time</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <HiOutlineCalendar />
              </div>
              <input
                type="date"
                name="recievedate"
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
            <label htmlFor="phone1">Phone No 1</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlinePhone />
              </div>
              <input
                type="text"
                name="phone1"
                placeholder="Phone No 1"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="phone2">Phone No 2</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlinePhone />
              </div>
              <input
                type="text"
                name="phone2"
                placeholder="Phone No 2"
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
            <label htmlFor="depositby">Deposit By</label>
            <div>
              <select
                name="depositby"
                className={Style.Form_box_input_userName}
                onChange={handleInputChange}
                required
              >
                <option value="">Select an option</option>
                <option value="bank">Self</option>
                <option value="paypal">Engineer</option>
                {/* <option value="creditcard">Credit Card</option> */}
              </select>
            </div>
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
            <label htmlFor="serialno">Serial No</label>
            <input
              type="text"
              name="serialno"
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
            <label htmlFor="billno">Bill/AMC No</label>
            <input
              type="text"
              name="billno"
              placeholder="#####"
              className={Style.Form_box_input_userName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="billdate">Bill/AMC Date</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <HiOutlineCalendar />
              </div>
              <input
                type="date"
                name="billdate"
                placeholder="dd-mm-yyyy"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="warranty">Warranty</label>
            <div Style={"display:flex;"}>
              <label>
                <input
                  type="radio"
                  name="warranty"
                  value="yes"
                  onChange={handleInputChange}
                  required
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="warranty"
                  value="no"
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
                  value="yes"
                  onChange={handleInputChange}
                  required
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="standby"
                  value="no"
                  onChange={handleInputChange}
                  required
                />
                No
              </label>
              
            </div>
          </div>

          <div className={Style.Form_box_input}>
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
          </div>
          <div className={Style.Form_box_input}>
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
          </div>
          <div className={Style.Form_box_btn}>
            <Button
              btnName="Submit"
              handleClick={handleSubmit}
              classStyle={Style.button}
              type="submit" // Ensure button type is set to "submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
