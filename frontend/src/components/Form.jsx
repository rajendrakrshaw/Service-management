import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
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
            <h1>Customer Details</h1>
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="shoaib bhai"
              className={Style.Form_box_input_userName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="email">Email</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <HiOutlineMail />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              cols="30"
              rows="6"
              placeholder="something about yourself in few words"
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="website">Website</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input
                type="text"
                name="website"
                placeholder="website"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="facebook">Facebook</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <TiSocialFacebook />
              </div>
              <input
                type="text"
                name="facebook"
                placeholder="http://shoaib"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="twitter">Twitter</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <TiSocialTwitter />
              </div>
              <input
                type="text"
                name="twitter"
                placeholder="http://shoaib"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="instagram">Instagram</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <TiSocialInstagram />
              </div>
              <input
                type="text"
                name="instagram"
                placeholder="http://shoaib"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="wallet">Wallet address</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input
                type="text"
                name="wallet"
                placeholder="0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8"
                onChange={handleInputChange}
                required
              />
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineContentCopy />
              </div>
            </div>
          </div>

          <div className={Style.Form_box_btn}>
          <Button
              btnName="Upload profile"
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
