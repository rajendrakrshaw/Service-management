import React, { useState, useEffect } from "react";
import axios from "axios";
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
  MdAdd,
} from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

// INTERNAL IMPORT
import Style from "./ReceiveMaterialForm.module.css";
import Button from "../Button/Button";

const ReceiveMaterialForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    state: "",
    district: "",
    post: "",
    pincode: "",
    landmark: "",
    addressline: "",
    phone: "",
    whatsapp: "",
    email: "",
    depositedBy: "",
    depositerName: "",
    item: [],
    accessories: [],
    // serialNo: "",
    problems: [],
    billNo: "",
    bill: "",
    billDate: "",
    warranty: "",
    standby: "",
  });

  const IndianStatesWithDistricts = {
    "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur"],
    "Arunachal Pradesh": ["Tawang", "West Kameng", "East Kameng", "Papum Pare"],
    Assam: ["Baksa", "Barpeta", "Biswanath", "Bongaigaon"],
    Bihar: ["Araria", "Arwal", "Aurangabad", "Banka"],
    Chhattisgarh: ["Balod", "Baloda Bazar", "Balrampur", "Bastar"],
    Goa: ["North Goa", "South Goa"],
    Gujarat: ["Ahmedabad", "Amreli", "Anand", "Aravalli"],
    Haryana: ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad"],
    "Himachal Pradesh": ["Bilaspur", "Chamba", "Hamirpur", "Kangra"],
    Jharkhand: ["Bokaro", "Chatra", "Deoghar", "Dhanbad"],
    Karnataka: ["Bagalkot", "Bangalore Rural", "Bangalore Urban", "Belgaum"],
    Kerala: ["Alappuzha", "Ernakulam", "Idukki", "Kannur"],
    "Madhya Pradesh": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar"],
    Maharashtra: ["Ahmednagar", "Akola", "Amravati", "Aurangabad"],
    Manipur: ["Bishnupur", "Chandel", "Churachandpur", "Imphal East"],
    Meghalaya: [
      "East Garo Hills",
      "East Jaintia Hills",
      "East Khasi Hills",
      "North Garo Hills",
    ],
    Mizoram: ["Aizawl", "Champhai", "Kolasib", "Lawngtlai"],
    Nagaland: ["Dimapur", "Kiphire", "Kohima", "Longleng"],
    Odisha: ["Angul", "Balangir", "Balasore", "Bargarh"],
    Punjab: ["Amritsar", "Barnala", "Bathinda", "Faridkot"],
    Rajasthan: ["Ajmer", "Alwar", "Banswara", "Baran"],
    Sikkim: ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
    "Tamil Nadu": ["Ariyalur", "Chennai", "Coimbatore", "Cuddalore"],
    Telangana: ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial"],
    Tripura: ["Dhalai", "Gomati", "Khowai", "North Tripura"],
    "Uttar Pradesh": ["Agra", "Aligarh", "Ambedkar Nagar", "Amethi"],
    Uttarakhand: ["Almora", "Bageshwar", "Chamoli", "Champawat"],
    "West Bengal": [
      "Alipurduar",
      "Bankura",
      "Birbhum",
      "Cooch Behar",
      "Dakshin Dinajpur",
      "Darjeeling",
      "Hooghly",
      "Howrah",
      "Jalpaiguri",
      "Jhargram",
      "Kalimpong",
      "Kolkata",
      "Malda",
      "Murshidabad",
      "Nadia",
      "North 24 Parganas",
      "Paschim Bardhaman",
      "Paschim Medinipur",
      "Purba Bardhaman",
      "Purba Medinipur",
      "Purulia",
      "South 24 Parganas",
      "Uttar Dinajpur",
    ],
    "Andaman and Nicobar Islands": [
      "Nicobar",
      "North and Middle Andaman",
      "South Andaman",
    ],
    Chandigarh: ["Chandigarh"],
    "Dadra and Nagar Haveli and Daman and Diu": [
      "Dadra and Nagar Haveli",
      "Daman",
      "Diu",
    ],
    Delhi: [
      "Central Delhi",
      "East Delhi",
      "New Delhi",
      "North Delhi",
      "North East Delhi",
      "North West Delhi",
      "Shahdara",
      "South Delhi",
      "South East Delhi",
      "South West Delhi",
      "West Delhi",
    ],
    Lakshadweep: ["Lakshadweep"],
    Puducherry: ["Karaikal", "Mahe", "Puducherry", "Yanam"],
  };

  const IndianStates = Object.keys(IndianStatesWithDistricts);
  const [selectedState, setSelectedState] = useState("");
  const [districts, setDistricts] = useState([]);

  const problemOptions = [
    "Power",
    "No-Display",
    "Internet",
    "Slow",
    "Hung",
    "Update",
    "Restart",
    "C-Format",
    "Full-Format",
    "Other",
  ];
  const itemOptions = [
    "Laptop",
    "Branded Desktop",
    "Assembled Desktop",
    "CPU",
    "Motherboard",
    "Ram",
    "SMPS",
    "HDD",
    "SSD",
    "Keyboard",
    "Mouse",
    "Speaker",
    "UPS",
    "Printer",
    "Pen Drive",
    "Scanner",
    "NVR",
    "DVR",
    "CCTV Camera",
    "IP Camera",
    "DSLR",
    "Headphone",
    "Router",
    "Switch",
    "Others",
  ];

  const accessoryOptions = [
    "Adaptor",
    "Power Cable",
    "Pen Drive",
    "Other",
    
  ];

  // Problems
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [customProblem, setCustomProblem] = useState(false);
  const [customProblemValue, setCustomProblemValue] = useState("");

  const handleSelectChange = (e) => {
    const selectedProblem = e.target.value;
    if (selectedProblem === "Other") {
      setCustomProblem(true);
      setCustomProblemValue("");
    } else {
      setSelectedProblems([...selectedProblems, selectedProblem]);
      // setCustomProblemValue();
    }
  };

  const handleCustomProblemChange = (e) => {
    setCustomProblemValue(e.target.value);
  };

  const handleAddCustomProblem = () => {
    if (customProblemValue.trim() !== "") {
      setSelectedProblems([...selectedProblems, customProblemValue]);
      setCustomProblemValue("");
      setCustomProblem(false);
    }
  };

  const handleRemoveProblem = (indexToRemove) => {
    setSelectedProblems(
      selectedProblems.filter((_, index) => index !== indexToRemove)
    );
  };

  useEffect(() => {
    setFormData({
      ...formData,
      problems: selectedProblems, // Update formData with selectedProblems
    });
  }, [selectedProblems]);
  //End

  // Start of Accessories
  const [selectedAccessories, setSelectedAccessories] = useState([]);
  const [customAccessory, setCustomAccessory] = useState(false);
  const [customAccessoryValue, setCustomAccessoryValue] = useState("");

  const handleAccessoryChange = (e) => {
    const selectedAccessory = e.target.value;
    if (selectedAccessory === "Other") {
      setCustomAccessory(true);
      setCustomAccessoryValue("");
    } else {
      setSelectedAccessories([...selectedAccessories, selectedAccessory]);
      // setCustomProblemValue();
    }
  };

  const handleCustomAccessoryChange = (e) => {
    setCustomAccessoryValue(e.target.value);
  };

  const handleAddCustomAccessory = () => {
    if (customAccessoryValue.trim() !== "") {
      setSelectedAccessories([...selectedAccessories, customAccessoryValue]);
      setCustomAccessoryValue("");
      setCustomAccessory(false);
    }
  };

  const handleRemoveAccessory = (indexToRemove) => {
    setSelectedAccessories(
      selectedAccessories.filter((_, index) => index !== indexToRemove)
    );
  };

  useEffect(() => {
    setFormData({
      ...formData,
      accessories: selectedAccessories, // Update formData with selectedProblems
    });
  }, [selectedAccessories]);
  //End of Accessories

  const toTitleCase = (str) => {
    return str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  };

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "state") {
      const selectedDistricts = IndianStatesWithDistricts[value] || [];
      setDistricts(selectedDistricts);
      setFormData((prevData) => ({
        ...prevData,
        state: value,
        district: "", // Reset district when state changes
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: name === "name" ? toTitleCase(value) : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    if (!e) return; // Ensure e is defined
    e.preventDefault();
    // Convert formData to JSON format
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
    try {
      // const response = await axios.post(
      //   "https://service-management-ashy.vercel.app/api/jobs",
      //   formData
      // );
      console.log(formData); // Handle success response
      setSubmissionStatus(true);
    } catch (error) {
      console.error("Error submitting form:", error); // Handle error
      setSubmissionStatus(false);
    } finally {
      // Refresh the page
      // window.location.reload();
    }
    // Here you can send jsonData to your backend or perform any other action
  };

  return (
    <div className={Style.Form}>
      <div className={Style.Form_box_mid}>
        <form onSubmit={handleSubmit}>
          {/* <div className={Style.Form_section_title}>
            <h1>Material Receive</h1>
          </div> */}
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

          {/* <div className={Style.Form_box_input}>
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
          </div> */}

          <div className={Style.Form_box_input}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={Style.Form_box_input_userName}
              onChange={handleInputChange}
              value={formData.name}
              required
              // cols="100"
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
          <br />
          <br />
          <div className={Style.Form_section_title}>
            <h3>Address Details</h3>
          </div>
          <hr />
          <section className={Style.Form_section}>
            <div className={`${Style.Form_box_input} ${Style.Form_address}`}>
              <label htmlFor="state">State</label>
              <select
                name="state"
                onChange={handleInputChange}
                required
                className={Style.Form_box_input_userName}
              >
                <option value="">Select your state</option>
                {IndianStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div className={`${Style.Form_box_input} ${Style.Form_address}`}>
              <label htmlFor="district">District</label>
              <select
                name="district"
                onChange={handleInputChange}
                required
                className={Style.Form_box_input_userName}
              >
                <option value="">Select your district</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
            <div className={`${Style.Form_box_input} ${Style.Form_address}`}>
              <label htmlFor="post">Post Office</label>
              <input
                type="text"
                name="post"
                placeholder="Post Office"
                onChange={handleInputChange}
                required
                className={Style.Form_box_input_userName}
              />
            </div>

            <div className={`${Style.Form_box_input} ${Style.Form_address}`}>
              <label htmlFor="pincode">Pincode</label>
              <input
                type="text"
                name="pincode"
                placeholder="Your pincode"
                onChange={handleInputChange}
                required
                className={Style.Form_box_input_userName}
              />
            </div>

            <div className={`${Style.Form_box_input} ${Style.Form_address}`}>
              <label htmlFor="landmark">Landmark</label>
              <input
                type="text"
                name="landmark"
                placeholder="Nearby landmark"
                onChange={handleInputChange}
                required
                className={Style.Form_box_input_userName}
              />
            </div>
            <div className={`${Style.Form_box_input} ${Style.Form_address}`}>
              <label htmlFor="addressline">Address Line</label>
              <input
                type="text"
                name="addressline"
                placeholder="Address Line"
                onChange={handleInputChange}
                required
                className={Style.Form_box_input_userName}
              />
            </div>
          </section>

          {/* <div className={Style.Form_box_input}>
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
          </div> */}

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
            <label htmlFor="phone">Phone No</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlinePhone />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Alternative No"
                onChange={handleInputChange}
                pattern="[0-9]{10}" // Only allows exactly 10 numerical digits
                maxLength="10" // Restricts the input to 10 characters
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
            {formData.depositedBy === "Engineer" ? (
              <div>
                <select
                  name="depositerName"
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
            ) : null}
            {formData.depositedBy === "Others" ? (
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
            {/* <div className={Style.Form_box_input_box}> */}
            <select
              name="item"
              className={Style.Form_box_input_userName}
              onChange={handleInputChange}
              required
            >
              <option value="">Select an Item</option>

              {itemOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}

              {/* <option value="creditcard">Credit Card</option> */}
            </select>
            {/* </div> */}
            {formData.item === "Others" ? (
              <input
                type="text"
                name="item"
                placeholder="Enter Item Name"
                className={Style.Form_box_input_userName}
                onChange={handleInputChange}
                required
              />
            ) : null}
          </div>
          {formData.item === "Laptop" ||
          formData.item === "Desktop" ||
          formData.item === "Assembled Desktop" ? (
            <section className={Style.Form_section}>
              <div className={`${Style.Form_box_input} ${Style.Form_address}`}>
                <label htmlFor="brnad">Brand</label>
                <input
                  type="text"
                  name="brand"
                  placeholder="Brand name"
                  onChange={handleInputChange}
                  required
                  className={Style.Form_box_input_userName}
                />
              </div>

              <div className={`${Style.Form_box_input} ${Style.Form_address}`}>
                <label htmlFor="model">Model</label>
                <input
                  type="text"
                  name="model"
                  placeholder="Model name"
                  onChange={handleInputChange}
                  required
                  className={Style.Form_box_input_userName}
                />
              </div>
              <div className={`${Style.Form_box_input} ${Style.Form_address}`}>
                <label htmlFor="model">Password</label>
                <input
                  type="text"
                  name="password"
                  placeholder="Password of system"
                  onChange={handleInputChange}
                  required
                  className={Style.Form_box_input_userName}
                />
              </div>
              <div className={`${Style.Form_box_input} ${Style.Form_address}`}>
                <label htmlFor="serialno">Serial No</label>
                <input
                  type="text"
                  name="serialno"
                  placeholder="#######"
                  onChange={handleInputChange}
                  required
                  className={Style.Form_box_input_userName}
                />
              </div>
            </section>
          ) : null}

          <div className={Style.Form_box_input}>
            <label htmlFor="accessories">
              Accressories Taken
            </label>
            <br />
            <section className={`${Style.Form_section}`}>
              <div className={Style.Form_address}>
                <select
                  onChange={handleAccessoryChange}
                  className={`${Style.Form_box_input_userName} ${Style.Form_address}`}
                >
                  <option value="">Select Accessories</option>
                  {accessoryOptions.map((accessory) => (
                    <option key={accessory} value={accessory}>
                      {accessory}
                    </option>
                  ))}
                </select>
              </div>
              {customAccessory && (
                <div className={Style.Form_problem}>
                  <input
                    type="text"
                    onChange={handleCustomAccessoryChange}
                    placeholder="Enter your accessory"
                    className={Style.Form_box_input_userName}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddCustomAccessory();
                    }}
                    className={Style.problemButton}
                  >
                    +
                  </button>

                  {/* <button onClick={handleAddCustomProblem}  className={Style.problemButton}>+</button> */}
                </div>
              )}
            </section>
            <br />
            <div className={Style.tagBox}>
              {selectedAccessories.map((accessory, index) => (
                <div key={index} className={`${Style.Form_checks}`}>
                  <span>{accessory}</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemoveAccessory(index);
                    }}
                  >
                    ✘
                  </button>
                </div>
              ))}
            </div>
          </div>
          
       
          <div className={Style.Form_box_input}>
            <label htmlFor="problems">
              Problems (For PC or Laptop Extra Details Required)
            </label>
            <br />
            <section className={`${Style.Form_section}`}>
              <div className={Style.Form_address}>
                <select
                  onChange={handleSelectChange}
                  className={`${Style.Form_box_input_userName} ${Style.Form_address}`}
                >
                  <option value="">Select a problem</option>
                  {problemOptions.map((problem) => (
                    <option key={problem} value={problem}>
                      {problem}
                    </option>
                  ))}
                </select>
              </div>
              {customProblem && (
                <div className={Style.Form_problem}>
                  <input
                    type="text"
                    onChange={handleCustomProblemChange}
                    placeholder="Enter custom problem"
                    className={Style.Form_box_input_userName}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddCustomProblem();
                    }}
                    className={Style.problemButton}
                  >
                    +
                  </button>

                </div>
              )}
            </section>
            <br />
            <div className={Style.tagBox}>
              {selectedProblems.map((problem, index) => (
                <div key={index} className={`${Style.Form_checks}`}>
                  <span>{problem}</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemoveProblem(index);
                    }}
                  >
                    ✘
                  </button>
                </div>
              ))}
            </div>
          </div>
          <section className={Style.Form_section}>
          <div className={`${Style.Form_box_input} ${Style.Form_address}`}>

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
          <div className={`${Style.Form_box_input} ${Style.Form_address}`}>

            <label htmlFor="bill">Bill/AMC Upload</label>
            <input
              type="file"
              name="bill"
              placeholder="Select bill"
              accept=".pdf,.doc,.docx, .jpg, .jpeg,.png" // Optional: Limit accepted file types
              // style={{ display: 'none' }}
              // className={Style.Form_box_input_userName}
              onChange={handleInputChange}
              className={Style.fileInput}
              required
            />
          </div>
          <div className={`${Style.Form_box_input} ${Style.Form_address}`}>

            <label htmlFor="billDate">Bill/AMC Date</label>
            <input
              type="date"
              name="billDate"
              placeholder="#####"
              className={Style.Form_box_input_userName}
              onChange={handleInputChange}
              required
            />
          </div>
          </section>
          <div className={Style.Form_box_btn}>
            <Button
              btnName="Submit"
              handleClick={handleSubmit}
              classStyle={Style.button}
              type="submit" // Ensure button type is set to "submit"
            />
            {/* Conditional rendering of submission message */}
            {submissionStatus === true && (
              <p className={Style.successMessage}>
                Form submitted successfully!
              </p>
            )}
            {submissionStatus === false && (
              <p className={Style.errorMessage}>
                Failed to submit form. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReceiveMaterialForm;
