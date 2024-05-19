import React, { useState } from 'react';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsChevronDown,
  BsChevronUp
} from 'react-icons/bs';
// import './Dashboard.css'; // Ensure this CSS file is correctly linked

const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  const [openMenus, setOpenMenus] = useState({});

  const handleMenuClick = (menu) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu]
    }));
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? 'sidebar-responsive' : ''}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>X</span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <div onClick={() => handleMenuClick('dashboard')}>
            <BsGrid1X2Fill className="icon" /> Dashboard
            {openMenus.dashboard ? <BsChevronUp className="icon" /> : <BsChevronDown className="icon" />}
          </div>
          {openMenus.dashboard && (
            <ul className="dropdown-menu">
              <li><a href="#">Overview</a></li>
              <li><a href="#">Analytics</a></li>
              <li><a href="#">Performance</a></li>
            </ul>
          )}
        </li>
        <li className="sidebar-list-item">
          <div onClick={() => handleMenuClick('products')}>
            <BsFillArchiveFill className="icon" /> Products
            {openMenus.products ? <BsChevronUp className="icon" /> : <BsChevronDown className="icon" />}
          </div>
          {openMenus.products && (
            <ul className="dropdown-menu">
              <li><a href="#">All Products</a></li>
              <li><a href="#">Add Product</a></li>
              <li><a href="#">Categories</a></li>
            </ul>
          )}
        </li>
        <li className="sidebar-list-item">
          <div onClick={() => handleMenuClick('categories')}>
            <BsFillGrid3X3GapFill className="icon" /> Categories
            {openMenus.categories ? <BsChevronUp className="icon" /> : <BsChevronDown className="icon" />}
          </div>
          {openMenus.categories && (
            <ul className="dropdown-menu">
              <li><a href="#">All Categories</a></li>
              <li><a href="#">Add Category</a></li>
            </ul>
          )}
        </li>
        <li className="sidebar-list-item">
          <div onClick={() => handleMenuClick('customers')}>
            <BsPeopleFill className="icon" /> Customers
            {openMenus.customers ? <BsChevronUp className="icon" /> : <BsChevronDown className="icon" />}
          </div>
          {openMenus.customers && (
            <ul className="dropdown-menu">
              <li><a href="#">All Customers</a></li>
              <li><a href="#">Add Customer</a></li>
            </ul>
          )}
        </li>
        <li className="sidebar-list-item">
          <div onClick={() => handleMenuClick('inventory')}>
            <BsListCheck className="icon" /> Inventory
            {openMenus.inventory ? <BsChevronUp className="icon" /> : <BsChevronDown className="icon" />}
          </div>
          {openMenus.inventory && (
            <ul className="dropdown-menu">
              <li><a href="#">Stock Levels</a></li>
              <li><a href="#">Reorders</a></li>
            </ul>
          )}
        </li>
        <li className="sidebar-list-item">
          <div onClick={() => handleMenuClick('reports')}>
            <BsMenuButtonWideFill className="icon" /> Reports
            {openMenus.reports ? <BsChevronUp className="icon" /> : <BsChevronDown className="icon" />}
          </div>
          {openMenus.reports && (
            <ul className="dropdown-menu">
              <li><a href="#">Sales</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">Products</a></li>
            </ul>
          )}
        </li>
        <li className="sidebar-list-item">
          <div onClick={() => handleMenuClick('settings')}>
            <BsFillGearFill className="icon" /> Settings
            {openMenus.settings ? <BsChevronUp className="icon" /> : <BsChevronDown className="icon" />}
          </div>
          {openMenus.settings && (
            <ul className="dropdown-menu">
              <li><a href="#">Profile</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Notifications</a></li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
