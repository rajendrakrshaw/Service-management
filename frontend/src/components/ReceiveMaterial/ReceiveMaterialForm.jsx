import React, { useState } from "react";
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
    // memono: "",
    // receivedDate: "",
    name: "",
    state: "",
    district: "",
    block: "",
    pincode: "",
    lamdmark: "",
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
  // const states = [
  //      {
  //         "state":"Andhra Pradesh",
  //         "districts":[
  //            "Anantapur",
  //            "Chittoor",
  //            "East Godavari",
  //            "Guntur",
  //            "Krishna",
  //            "Kurnool",
  //            "Nellore",
  //            "Prakasam",
  //            "Srikakulam",
  //            "Visakhapatnam",
  //            "Vizianagaram",
  //            "West Godavari",
  //            "YSR Kadapa"
  //         ]
  //      },
  //      {
  //         "state":"Arunachal Pradesh",
  //         "districts":[
  //            "Tawang",
  //            "West Kameng",
  //            "East Kameng",
  //            "Papum Pare",
  //            "Kurung Kumey",
  //            "Kra Daadi",
  //            "Lower Subansiri",
  //            "Upper Subansiri",
  //            "West Siang",
  //            "East Siang",
  //            "Siang",
  //            "Upper Siang",
  //            "Lower Siang",
  //            "Lower Dibang Valley",
  //            "Dibang Valley",
  //            "Anjaw",
  //            "Lohit",
  //            "Namsai",
  //            "Changlang",
  //            "Tirap",
  //            "Longding"
  //         ]
  //      },
  //      {
  //         "state":"Assam",
  //         "districts":[
  //            "Baksa",
  //            "Barpeta",
  //            "Biswanath",
  //            "Bongaigaon",
  //            "Cachar",
  //            "Charaideo",
  //            "Chirang",
  //            "Darrang",
  //            "Dhemaji",
  //            "Dhubri",
  //            "Dibrugarh",
  //            "Goalpara",
  //            "Golaghat",
  //            "Hailakandi",
  //            "Hojai",
  //            "Jorhat",
  //            "Kamrup Metropolitan",
  //            "Kamrup",
  //            "Karbi Anglong",
  //            "Karimganj",
  //            "Kokrajhar",
  //            "Lakhimpur",
  //            "Majuli",
  //            "Morigaon",
  //            "Nagaon",
  //            "Nalbari",
  //            "Dima Hasao",
  //            "Sivasagar",
  //            "Sonitpur",
  //            "South Salmara-Mankachar",
  //            "Tinsukia",
  //            "Udalguri",
  //            "West Karbi Anglong"
  //         ]
  //      },
  //      {
  //         "state":"Bihar",
  //         "districts":[
  //            "Araria",
  //            "Arwal",
  //            "Aurangabad",
  //            "Banka",
  //            "Begusarai",
  //            "Bhagalpur",
  //            "Bhojpur",
  //            "Buxar",
  //            "Darbhanga",
  //            "East Champaran (Motihari)",
  //            "Gaya",
  //            "Gopalganj",
  //            "Jamui",
  //            "Jehanabad",
  //            "Kaimur (Bhabua)",
  //            "Katihar",
  //            "Khagaria",
  //            "Kishanganj",
  //            "Lakhisarai",
  //            "Madhepura",
  //            "Madhubani",
  //            "Munger (Monghyr)",
  //            "Muzaffarpur",
  //            "Nalanda",
  //            "Nawada",
  //            "Patna",
  //            "Purnia (Purnea)",
  //            "Rohtas",
  //            "Saharsa",
  //            "Samastipur",
  //            "Saran",
  //            "Sheikhpura",
  //            "Sheohar",
  //            "Sitamarhi",
  //            "Siwan",
  //            "Supaul",
  //            "Vaishali",
  //            "West Champaran"
  //         ]
  //      },
  //      {
  //         "state":"Chandigarh (UT)",
  //         "districts":[
  //            "Chandigarh"
  //         ]
  //      },
  //      {
  //         "state":"Chhattisgarh",
  //         "districts":[
  //            "Balod",
  //            "Baloda Bazar",
  //            "Balrampur",
  //            "Bastar",
  //            "Bemetara",
  //            "Bijapur",
  //            "Bilaspur",
  //            "Dantewada (South Bastar)",
  //            "Dhamtari",
  //            "Durg",
  //            "Gariyaband",
  //            "Janjgir-Champa",
  //            "Jashpur",
  //            "Kabirdham (Kawardha)",
  //            "Kanker (North Bastar)",
  //            "Kondagaon",
  //            "Korba",
  //            "Korea (Koriya)",
  //            "Mahasamund",
  //            "Mungeli",
  //            "Narayanpur",
  //            "Raigarh",
  //            "Raipur",
  //            "Rajnandgaon",
  //            "Sukma",
  //            "Surajpur  ",
  //            "Surguja"
  //         ]
  //      },
  //      {
  //         "state":"Dadra and Nagar Haveli (UT)",
  //         "districts":[
  //            "Dadra & Nagar Haveli"
  //         ]
  //      },
  //      {
  //         "state":"Daman and Diu (UT)",
  //         "districts":[
  //            "Daman",
  //            "Diu"
  //         ]
  //      },
  //      {
  //         "state":"Delhi (NCT)",
  //         "districts":[
  //            "Central Delhi",
  //            "East Delhi",
  //            "New Delhi",
  //            "North Delhi",
  //            "North East  Delhi",
  //            "North West  Delhi",
  //            "Shahdara",
  //            "South Delhi",
  //            "South East Delhi",
  //            "South West  Delhi",
  //            "West Delhi"
  //         ]
  //      },
  //      {
  //         "state":"Goa",
  //         "districts":[
  //            "North Goa",
  //            "South Goa"
  //         ]
  //      },
  //      {
  //         "state":"Gujarat",
  //         "districts":[
  //            "Ahmedabad",
  //            "Amreli",
  //            "Anand",
  //            "Aravalli",
  //            "Banaskantha (Palanpur)",
  //            "Bharuch",
  //            "Bhavnagar",
  //            "Botad",
  //            "Chhota Udepur",
  //            "Dahod",
  //            "Dangs (Ahwa)",
  //            "Devbhoomi Dwarka",
  //            "Gandhinagar",
  //            "Gir Somnath",
  //            "Jamnagar",
  //            "Junagadh",
  //            "Kachchh",
  //            "Kheda (Nadiad)",
  //            "Mahisagar",
  //            "Mehsana",
  //            "Morbi",
  //            "Narmada (Rajpipla)",
  //            "Navsari",
  //            "Panchmahal (Godhra)",
  //            "Patan",
  //            "Porbandar",
  //            "Rajkot",
  //            "Sabarkantha (Himmatnagar)",
  //            "Surat",
  //            "Surendranagar",
  //            "Tapi (Vyara)",
  //            "Vadodara",
  //            "Valsad"
  //         ]
  //      },
  //      {
  //         "state":"Haryana",
  //         "districts":[
  //            "Ambala",
  //            "Bhiwani",
  //            "Charkhi Dadri",
  //            "Faridabad",
  //            "Fatehabad",
  //            "Gurgaon",
  //            "Hisar",
  //            "Jhajjar",
  //            "Jind",
  //            "Kaithal",
  //            "Karnal",
  //            "Kurukshetra",
  //            "Mahendragarh",
  //            "Mewat",
  //            "Palwal",
  //            "Panchkula",
  //            "Panipat",
  //            "Rewari",
  //            "Rohtak",
  //            "Sirsa",
  //            "Sonipat",
  //            "Yamunanagar"
  //         ]
  //      },
  //      {
  //         "state":"Himachal Pradesh",
  //         "districts":[
  //            "Bilaspur",
  //            "Chamba",
  //            "Hamirpur",
  //            "Kangra",
  //            "Kinnaur",
  //            "Kullu",
  //            "Lahaul &amp; Spiti",
  //            "Mandi",
  //            "Shimla",
  //            "Sirmaur (Sirmour)",
  //            "Solan",
  //            "Una"
  //         ]
  //      },
  //      {
  //         "state":"Jammu and Kashmir",
  //         "districts":[
  //            "Anantnag",
  //            "Bandipore",
  //            "Baramulla",
  //            "Budgam",
  //            "Doda",
  //            "Ganderbal",
  //            "Jammu",
  //            "Kargil",
  //            "Kathua",
  //            "Kishtwar",
  //            "Kulgam",
  //            "Kupwara",
  //            "Leh",
  //            "Poonch",
  //            "Pulwama",
  //            "Rajouri",
  //            "Ramban",
  //            "Reasi",
  //            "Samba",
  //            "Shopian",
  //            "Srinagar",
  //            "Udhampur"
  //         ]
  //      },
  //      {
  //         "state":"Jharkhand",
  //         "districts":[
  //            "Bokaro",
  //            "Chatra",
  //            "Deoghar",
  //            "Dhanbad",
  //            "Dumka",
  //            "East Singhbhum",
  //            "Garhwa",
  //            "Giridih",
  //            "Godda",
  //            "Gumla",
  //            "Hazaribag",
  //            "Jamtara",
  //            "Khunti",
  //            "Koderma",
  //            "Latehar",
  //            "Lohardaga",
  //            "Pakur",
  //            "Palamu",
  //            "Ramgarh",
  //            "Ranchi",
  //            "Sahibganj",
  //            "Seraikela-Kharsawan",
  //            "Simdega",
  //            "West Singhbhum"
  //         ]
  //      },
  //      {
  //         "state":"Karnataka",
  //         "districts":[
  //            "Bagalkot",
  //            "Ballari (Bellary)",
  //            "Belagavi (Belgaum)",
  //            "Bengaluru (Bangalore) Rural",
  //            "Bengaluru (Bangalore) Urban",
  //            "Bidar",
  //            "Chamarajanagar",
  //            "Chikballapur",
  //            "Chikkamagaluru (Chikmagalur)",
  //            "Chitradurga",
  //            "Dakshina Kannada",
  //            "Davangere",
  //            "Dharwad",
  //            "Gadag",
  //            "Hassan",
  //            "Haveri",
  //            "Kalaburagi (Gulbarga)",
  //            "Kodagu",
  //            "Kolar",
  //            "Koppal",
  //            "Mandya",
  //            "Mysuru (Mysore)",
  //            "Raichur",
  //            "Ramanagara",
  //            "Shivamogga (Shimoga)",
  //            "Tumakuru (Tumkur)",
  //            "Udupi",
  //            "Uttara Kannada (Karwar)",
  //            "Vijayapura (Bijapur)",
  //            "Yadgir"
  //         ]
  //      },
  //      {
  //         "state":"Kerala",
  //         "districts":[
  //            "Alappuzha",
  //            "Ernakulam",
  //            "Idukki",
  //            "Kannur",
  //            "Kasaragod",
  //            "Kollam",
  //            "Kottayam",
  //            "Kozhikode",
  //            "Malappuram",
  //            "Palakkad",
  //            "Pathanamthitta",
  //            "Thiruvananthapuram",
  //            "Thrissur",
  //            "Wayanad"
  //         ]
  //      },
  //      {
  //         "state":"Lakshadweep (UT)",
  //         "districts":[
  //            "Agatti",
  //            "Amini",
  //            "Androth",
  //            "Bithra",
  //            "Chethlath",
  //            "Kavaratti",
  //            "Kadmath",
  //            "Kalpeni",
  //            "Kilthan",
  //            "Minicoy"
  //         ]
  //      },
  //      {
  //         "state":"Madhya Pradesh",
  //         "districts":[
  //            "Agar Malwa",
  //            "Alirajpur",
  //            "Anuppur",
  //            "Ashoknagar",
  //            "Balaghat",
  //            "Barwani",
  //            "Betul",
  //            "Bhind",
  //            "Bhopal",
  //            "Burhanpur",
  //            "Chhatarpur",
  //            "Chhindwara",
  //            "Damoh",
  //            "Datia",
  //            "Dewas",
  //            "Dhar",
  //            "Dindori",
  //            "Guna",
  //            "Gwalior",
  //            "Harda",
  //            "Hoshangabad",
  //            "Indore",
  //            "Jabalpur",
  //            "Jhabua",
  //            "Katni",
  //            "Khandwa",
  //            "Khargone",
  //            "Mandla",
  //            "Mandsaur",
  //            "Morena",
  //            "Narsinghpur",
  //            "Neemuch",
  //            "Panna",
  //            "Raisen",
  //            "Rajgarh",
  //            "Ratlam",
  //            "Rewa",
  //            "Sagar",
  //            "Satna",
  //            "Sehore",
  //            "Seoni",
  //            "Shahdol",
  //            "Shajapur",
  //            "Sheopur",
  //            "Shivpuri",
  //            "Sidhi",
  //            "Singrauli",
  //            "Tikamgarh",
  //            "Ujjain",
  //            "Umaria",
  //            "Vidisha"
  //         ]
  //      },
  //      {
  //         "state":"Maharashtra",
  //         "districts":[
  //            "Ahmednagar",
  //            "Akola",
  //            "Amravati",
  //            "Aurangabad",
  //            "Beed",
  //            "Bhandara",
  //            "Buldhana",
  //            "Chandrapur",
  //            "Dhule",
  //            "Gadchiroli",
  //            "Gondia",
  //            "Hingoli",
  //            "Jalgaon",
  //            "Jalna",
  //            "Kolhapur",
  //            "Latur",
  //            "Mumbai City",
  //            "Mumbai Suburban",
  //            "Nagpur",
  //            "Nanded",
  //            "Nandurbar",
  //            "Nashik",
  //            "Osmanabad",
  //            "Palghar",
  //            "Parbhani",
  //            "Pune",
  //            "Raigad",
  //            "Ratnagiri",
  //            "Sangli",
  //            "Satara",
  //            "Sindhudurg",
  //            "Solapur",
  //            "Thane",
  //            "Wardha",
  //            "Washim",
  //            "Yavatmal"
  //         ]
  //      },
  //      {
  //         "state":"Manipur",
  //         "districts":[
  //            "Bishnupur",
  //            "Chandel",
  //            "Churachandpur",
  //            "Imphal East",
  //            "Imphal West",
  //            "Jiribam",
  //            "Kakching",
  //            "Kamjong",
  //            "Kangpokpi",
  //            "Noney",
  //            "Pherzawl",
  //            "Senapati",
  //            "Tamenglong",
  //            "Tengnoupal",
  //            "Thoubal",
  //            "Ukhrul"
  //         ]
  //      },
  //      {
  //         "state":"Meghalaya",
  //         "districts":[
  //            "East Garo Hills",
  //            "East Jaintia Hills",
  //            "East Khasi Hills",
  //            "North Garo Hills",
  //            "Ri Bhoi",
  //            "South Garo Hills",
  //            "South West Garo Hills ",
  //            "South West Khasi Hills",
  //            "West Garo Hills",
  //            "West Jaintia Hills",
  //            "West Khasi Hills"
  //         ]
  //      },
  //      {
  //         "state":"Mizoram",
  //         "districts":[
  //            "Aizawl",
  //            "Champhai",
  //            "Kolasib",
  //            "Lawngtlai",
  //            "Lunglei",
  //            "Mamit",
  //            "Saiha",
  //            "Serchhip"
  //         ]
  //      },
  //      {
  //         "state":"Nagaland",
  //         "districts":[
  //            "Dimapur",
  //            "Kiphire",
  //            "Kohima",
  //            "Longleng",
  //            "Mokokchung",
  //            "Mon",
  //            "Peren",
  //            "Phek",
  //            "Tuensang",
  //            "Wokha",
  //            "Zunheboto"
  //         ]
  //      },
  //      {
  //         "state":"Odisha",
  //         "districts":[
  //            "Angul",
  //            "Balangir",
  //            "Balasore",
  //            "Bargarh",
  //            "Bhadrak",
  //            "Boudh",
  //            "Cuttack",
  //            "Deogarh",
  //            "Dhenkanal",
  //            "Gajapati",
  //            "Ganjam",
  //            "Jagatsinghapur",
  //            "Jajpur",
  //            "Jharsuguda",
  //            "Kalahandi",
  //            "Kandhamal",
  //            "Kendrapara",
  //            "Kendujhar (Keonjhar)",
  //            "Khordha",
  //            "Koraput",
  //            "Malkangiri",
  //            "Mayurbhanj",
  //            "Nabarangpur",
  //            "Nayagarh",
  //            "Nuapada",
  //            "Puri",
  //            "Rayagada",
  //            "Sambalpur",
  //            "Sonepur",
  //            "Sundargarh"
  //         ]
  //      },
  //      {
  //         "state":"Puducherry (UT)",
  //         "districts":[
  //            "Karaikal",
  //            "Mahe",
  //            "Pondicherry",
  //            "Yanam"
  //         ]
  //      },
  //      {
  //         "state":"Punjab",
  //         "districts":[
  //            "Amritsar",
  //            "Barnala",
  //            "Bathinda",
  //            "Faridkot",
  //            "Fatehgarh Sahib",
  //            "Fazilka",
  //            "Ferozepur",
  //            "Gurdaspur",
  //            "Hoshiarpur",
  //            "Jalandhar",
  //            "Kapurthala",
  //            "Ludhiana",
  //            "Mansa",
  //            "Moga",
  //            "Muktsar",
  //            "Nawanshahr (Shahid Bhagat Singh Nagar)",
  //            "Pathankot",
  //            "Patiala",
  //            "Rupnagar",
  //            "Sahibzada Ajit Singh Nagar (Mohali)",
  //            "Sangrur",
  //            "Tarn Taran"
  //         ]
  //      },
  //      {
  //         "state":"Rajasthan",
  //         "districts":[
  //            "Ajmer",
  //            "Alwar",
  //            "Banswara",
  //            "Baran",
  //            "Barmer",
  //            "Bharatpur",
  //            "Bhilwara",
  //            "Bikaner",
  //            "Bundi",
  //            "Chittorgarh",
  //            "Churu",
  //            "Dausa",
  //            "Dholpur",
  //            "Dungarpur",
  //            "Hanumangarh",
  //            "Jaipur",
  //            "Jaisalmer",
  //            "Jalore",
  //            "Jhalawar",
  //            "Jhunjhunu",
  //            "Jodhpur",
  //            "Karauli",
  //            "Kota",
  //            "Nagaur",
  //            "Pali",
  //            "Pratapgarh",
  //            "Rajsamand",
  //            "Sawai Madhopur",
  //            "Sikar",
  //            "Sirohi",
  //            "Sri Ganganagar",
  //            "Tonk",
  //            "Udaipur"
  //         ]
  //      },
  //      {
  //         "state":"Sikkim",
  //         "districts":[
  //            "East Sikkim",
  //            "North Sikkim",
  //            "South Sikkim",
  //            "West Sikkim"
  //         ]
  //      },
  //      {
  //         "state":"Tamil Nadu",
  //         "districts":[
  //            "Ariyalur",
  //            "Chennai",
  //            "Coimbatore",
  //            "Cuddalore",
  //            "Dharmapuri",
  //            "Dindigul",
  //            "Erode",
  //            "Kanchipuram",
  //            "Kanyakumari",
  //            "Karur",
  //            "Krishnagiri",
  //            "Madurai",
  //            "Nagapattinam",
  //            "Namakkal",
  //            "Nilgiris",
  //            "Perambalur",
  //            "Pudukkottai",
  //            "Ramanathapuram",
  //            "Salem",
  //            "Sivaganga",
  //            "Thanjavur",
  //            "Theni",
  //            "Thoothukudi (Tuticorin)",
  //            "Tiruchirappalli",
  //            "Tirunelveli",
  //            "Tiruppur",
  //            "Tiruvallur",
  //            "Tiruvannamalai",
  //            "Tiruvarur",
  //            "Vellore",
  //            "Viluppuram",
  //            "Virudhunagar"
  //         ]
  //      },
  //      {
  //         "state":"Telangana",
  //         "districts":[
  //            "Adilabad",
  //            "Bhadradri Kothagudem",
  //            "Hyderabad",
  //            "Jagtial",
  //            "Jangaon",
  //            "Jayashankar Bhoopalpally",
  //            "Jogulamba Gadwal",
  //            "Kamareddy",
  //            "Karimnagar",
  //            "Khammam",
  //            "Komaram Bheem Asifabad",
  //            "Mahabubabad",
  //            "Mahabubnagar",
  //            "Mancherial",
  //            "Medak",
  //            "Medchal",
  //            "Nagarkurnool",
  //            "Nalgonda",
  //            "Nirmal",
  //            "Nizamabad",
  //            "Peddapalli",
  //            "Rajanna Sircilla",
  //            "Rangareddy",
  //            "Sangareddy",
  //            "Siddipet",
  //            "Suryapet",
  //            "Vikarabad",
  //            "Wanaparthy",
  //            "Warangal (Rural)",
  //            "Warangal (Urban)",
  //            "Yadadri Bhuvanagiri"
  //         ]
  //      },
  //      {
  //         "state":"Tripura",
  //         "districts":[
  //            "Dhalai",
  //            "Gomati",
  //            "Khowai",
  //            "North Tripura",
  //            "Sepahijala",
  //            "South Tripura",
  //            "Unakoti",
  //            "West Tripura"
  //         ]
  //      },
  //      {
  //         "state":"Uttarakhand",
  //         "districts":[
  //            "Almora",
  //            "Bageshwar",
  //            "Chamoli",
  //            "Champawat",
  //            "Dehradun",
  //            "Haridwar",
  //            "Nainital",
  //            "Pauri Garhwal",
  //            "Pithoragarh",
  //            "Rudraprayag",
  //            "Tehri Garhwal",
  //            "Udham Singh Nagar",
  //            "Uttarkashi"
  //         ]
  //      },
  //      {
  //         "state":"Uttar Pradesh",
  //         "districts":[
  //            "Agra",
  //            "Aligarh",
  //            "Allahabad",
  //            "Ambedkar Nagar",
  //            "Amethi (Chatrapati Sahuji Mahraj Nagar)",
  //            "Amroha (J.P. Nagar)",
  //            "Auraiya",
  //            "Azamgarh",
  //            "Baghpat",
  //            "Bahraich",
  //            "Ballia",
  //            "Balrampur",
  //            "Banda",
  //            "Barabanki",
  //            "Bareilly",
  //            "Basti",
  //            "Bhadohi",
  //            "Bijnor",
  //            "Budaun",
  //            "Bulandshahr",
  //            "Chandauli",
  //            "Chitrakoot",
  //            "Deoria",
  //            "Etah",
  //            "Etawah",
  //            "Faizabad",
  //            "Farrukhabad",
  //            "Fatehpur",
  //            "Firozabad",
  //            "Gautam Buddha Nagar",
  //            "Ghaziabad",
  //            "Ghazipur",
  //            "Gonda",
  //            "Gorakhpur",
  //            "Hamirpur",
  //            "Hapur (Panchsheel Nagar)",
  //            "Hardoi",
  //            "Hathras",
  //            "Jalaun",
  //            "Jaunpur",
  //            "Jhansi",
  //            "Kannauj",
  //            "Kanpur Dehat",
  //            "Kanpur Nagar",
  //            "Kanshiram Nagar (Kasganj)",
  //            "Kaushambi",
  //            "Kushinagar (Padrauna)",
  //            "Lakhimpur - Kheri",
  //            "Lalitpur",
  //            "Lucknow",
  //            "Maharajganj",
  //            "Mahoba",
  //            "Mainpuri",
  //            "Mathura",
  //            "Mau",
  //            "Meerut",
  //            "Mirzapur",
  //            "Moradabad",
  //            "Muzaffarnagar",
  //            "Pilibhit",
  //            "Pratapgarh",
  //            "RaeBareli",
  //            "Rampur",
  //            "Saharanpur",
  //            "Sambhal (Bhim Nagar)",
  //            "Sant Kabir Nagar",
  //            "Shahjahanpur",
  //            "Shamali (Prabuddh Nagar)",
  //            "Shravasti",
  //            "Siddharth Nagar",
  //            "Sitapur",
  //            "Sonbhadra",
  //            "Sultanpur",
  //            "Unnao",
  //            "Varanasi"
  //         ]
  //      },
  //      {
  //         "state":"West Bengal",
  //         "districts":[
  //            "Alipurduar",
  //            "Bankura",
  //            "Birbhum",
  //            "Burdwan (Bardhaman)",
  //            "Cooch Behar",
  //            "Dakshin Dinajpur (South Dinajpur)",
  //            "Darjeeling",
  //            "Hooghly",
  //            "Howrah",
  //            "Jalpaiguri",
  //            "Kalimpong",
  //            "Kolkata",
  //            "Malda",
  //            "Murshidabad",
  //            "Nadia",
  //            "North 24 Parganas",
  //            "Paschim Medinipur (West Medinipur)",
  //            "Purba Medinipur (East Medinipur)",
  //            "Purulia",
  //            "South 24 Parganas",
  //            "Uttar Dinajpur (North Dinajpur)"
  //         ]
  //      }
  //   ]

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
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevState) => {
      const newProblems = checked
        ? [...prevState.problems, name]
        : prevState.problems.filter((problem) => problem !== name);
      return { ...prevState, problems: newProblems };
    });
  };
// Problems
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [customProblem, setCustomProblem] = useState(false);
  const [customProblemValue, setCustomProblemValue] = useState(false);

  // const problemOptions = ['Starting problem', 'Booting problem', 'Charging port problem', 'Other'];

  const handleSelectChange = (e) => {
    const selectedProblem = e.target.value;
    if (selectedProblem === "Other") {
      setCustomProblem(true);
      setCustomProblemValue('');
    } else {
      setSelectedProblems([...selectedProblems, selectedProblem]);
      // setCustomProblemValue();

    }
  };

  const handleCustomProblemChange = (e) => {
    setCustomProblemValue(e.target.value);
  };

  const handleAddCustomProblem = () => {
    if (customProblemValue.trim() !== '') {
      setSelectedProblems([...selectedProblems, customProblemValue]);
      setCustomProblemValue('');
      setCustomProblem(false);

    }
  };

  const handleRemoveProblem = (indexToRemove) => {
    setSelectedProblems(selectedProblems.filter((_, index) => index !== indexToRemove));
  };
//End

  // Example usage
  // console.log(IndianStatesWithDistricts["Maharashtra"]); // Output: ["Ahmednagar", "Akola", "Amravati", "Aurangabad"]

  const initialForm = {
    // receivedDate: "",
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
  };
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
      const response = await axios.post(
        "https://service-management-ashy.vercel.app/api/jobs",
        formData
      );
      console.log(response.data); // Handle success response
      setSubmissionStatus(true);
    } catch (error) {
      console.error("Error submitting form:", error); // Handle error
      setSubmissionStatus(false);
    } finally {
      // Refresh the page
      window.location.reload();
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
              <label htmlFor="block">Block</label>
              <input
                type="text"
                name="block"
                placeholder="Your block"
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
              <option value="Laptop">Laptop</option>
              <option value="Desktop">Desktop</option>
              <option value="Assembled Desktop">Assembled Desktop</option>
              <option value="Others">Others</option>

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
          {/* <div className={Style.Form_box_input}>
            <label htmlFor="serialNo">Serial No</label>
            <input
              type="text"
              name="serialNo"
              placeholder="#####"
              className={Style.Form_box_input_userName}
              onChange={handleInputChange}
              required
            />
          </div> */}
          {/* <div className={Style.Form_box_input}>
              <label htmlFor="problems">
                Problems {"("}For PC or Laptop Extra Details Required {")"}
               
              </label>
              <br />
              <section className={Style.Form_section}>

                {problemOptions.map((problem) => (
                  <div key={problem} className={` ${Style.Form_checks}`}>
                    <input
                      type="checkbox"
                      name={problem}
                      id={problem}
                      checked={formData.problems.includes(problem)}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor={problem}>{problem}</label>
                  </div>
                ))}
              </section>
<br />
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
           */}
          <div className={Style.Form_box_input}>
            <label htmlFor="problems">
              Problems (For PC or Laptop Extra Details Required)
            </label>
            <br />
            <section className={`${Style.Form_section}`}>
            <div className={Style.Form_address}>
              <select onChange={handleSelectChange} className={`${Style.Form_box_input_userName} ${Style.Form_address}`}>
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
                   <button onClick={(e) => { e.preventDefault(); handleAddCustomProblem(); }} className={Style.problemButton}>+</button>

                  {/* <button onClick={handleAddCustomProblem}  className={Style.problemButton}>+</button> */}
                </div>
              )}
            </section>
            <br />
            <div className={Style.tagBox}>
              {selectedProblems.map((problem, index) => (
                <div key={index} className={`${Style.Form_checks}`}>
                  <span>{problem}</span>
                  <button onClick={(e) =>{e.preventDefault(); handleRemoveProblem(index)}}>X</button>
                </div>
              ))}
              
            </div>
          </div>
          {/* <div className={Style.Form_box_input}>
            <label htmlFor="warranty">Warranty</label>
            <div Style={"display:flex;"}>
              <label>
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
          </div> */}

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
