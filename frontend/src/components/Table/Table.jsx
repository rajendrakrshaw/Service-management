

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styles from './Table.module.css';

// const Table = () => {
//   const [data, setData] = useState([]);
//   const [expandedRow, setExpandedRow] = useState(null);
//   const [numVisibleColumns, setNumVisibleColumns] = useState(16);

//   useEffect(() => {
//     fetchData();
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     handleResize();
//   }, [numVisibleColumns]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://service-management-ashy.vercel.app/api/jobs');
//       setData(response.data.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleResize = () => {
//     const screenWidth = window.innerWidth;
//     if (screenWidth < 768) {
//       setNumVisibleColumns(2);
//     } else if (screenWidth < 900) {
//       setNumVisibleColumns(4);
//     } else {
//       setNumVisibleColumns(16);
//     }
//   };

//   const toggleExpandedRow = (index) => {
//     if (expandedRow === index) {
//       setExpandedRow(null);
//     } else {
//       setExpandedRow(index);
//     }
//   };

//   return (
//     <div className={styles.tableContainer}>
//       <div className={styles.horizontalScrollContainer}>
//         <table className={`table ${styles.table}`}>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Address</th>
//               {numVisibleColumns >= 3 && <th>Phone</th>}
//               {numVisibleColumns >= 4 && <th>Email</th>}
//               {numVisibleColumns >= 5 && <th>Deposited By</th>}
//               {numVisibleColumns >= 5 && <th>Depositer Name</th>}
//               {numVisibleColumns >= 5 && <th>Item</th>}
//               {numVisibleColumns >= 5 && <th>Accessories</th>}
//               {numVisibleColumns >= 5 && <th>Serial No</th>}
//               {numVisibleColumns >= 5 && <th>Problems</th>}
//               {numVisibleColumns >= 5 && <th>Bill No</th>}
//               {numVisibleColumns >= 5 && <th>Bill Date</th>}
//               {numVisibleColumns >= 5 && <th>Warranty</th>}
//               {numVisibleColumns >= 5 && <th>Standby</th>}
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <React.Fragment key={index}>
//                 <tr onClick={() => toggleExpandedRow(index)}>
//                   <td>{index + 1}</td>
//                   <td>{item.name}</td>
//                   <td>{item.address}</td>
//                   {numVisibleColumns >= 3 && <td>{item.phone}</td>}
//                   {numVisibleColumns >= 4 && <td>{item.email}</td>}
//                   {numVisibleColumns >= 5 && <td>{item.depositedBy}</td>}
//                   {numVisibleColumns >= 5 && <td> {item.depositerName}</td>}
//                   {numVisibleColumns >= 5 && <td>{item.item}</td>}
//                   {numVisibleColumns >= 5 && <td>{item.accessories}</td>}
//                   {numVisibleColumns >= 5 && <td>{item.serialNo}</td>}
//                   {numVisibleColumns >= 5 && <td>{item.problems}</td>}
//                   {numVisibleColumns >= 5 && <td>{item.billNo}</td>}
//                   {numVisibleColumns >= 5 && <td>{item.billDate}</td>}
//                   {numVisibleColumns >= 5 && <td>{item.warranty}</td>}
//                   {numVisibleColumns >= 5 && <td> {item.standby}</td>}
                
//                   <td>
//                     {numVisibleColumns < 5 && (
//                       <button className={styles.eyeButton} onClick={(e) => {
//                         e.stopPropagation();
//                         toggleExpandedRow(index);
//                       }}>
//                         &#128065;
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//                 {expandedRow === index && (
//                   <tr>
//                     <td colSpan={numVisibleColumns + 2}>
//                       <div className={styles.expandedRow}>
//                         <strong>Received Date:</strong> {item.receivedDate}<br />
//                         <strong>Name:</strong> {item.name}<br />
//                         <strong>Address:</strong> {item.address}<br />
//                         <strong>Phone:</strong> {item.phone}<br />
//                         <strong>WhatsApp:</strong> {item.whatsapp}<br />
//                         <strong>Email:</strong> {item.email}<br />
//                         <strong>Deposited By:</strong> {item.depositedBy}<br />
//                         <strong>Depositer Name:</strong> {item.depositerName}<br />
//                         <strong>Item:</strong> {item.item}<br />
//                         <strong>Accessories:</strong> {item.accessories}<br />
//                         <strong>Serial No:</strong> {item.serialNo}<br />
//                         <strong>Problems:</strong> {item.problems}<br />
//                         <strong>Bill No:</strong> {item.billNo}<br />
//                         <strong>Bill Date:</strong> {item.billDate}<br />
//                         <strong>Warranty:</strong> {item.warranty}<br />
//                         <strong>Standby:</strong> {item.standby}<br />
//                         {/* <strong>Password:</strong> {item.password}<br /> */}
//                       </div>
//                     </td>
//                   </tr>
//                 )}
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Table;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import styles from './Table.module.css';
import {
    MdOutlineSettings,
} from "react-icons/md";
import Menu from '../Menu/Menu'; // Import the Menu component

const Table = () => {
  const [data, setData] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [numVisibleColumns, setNumVisibleColumns] = useState(16);
  const [openMenuIndex, setOpenMenuIndex] = useState(null); // Track which menu is open
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    handleResize();
  }, [numVisibleColumns]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://service-management-ashy.vercel.app/api/jobs');
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setNumVisibleColumns(2);
    } else if (screenWidth < 900) {
      setNumVisibleColumns(4);
    } else {
      setNumVisibleColumns(16);
    }
  };

  const toggleExpandedRow = (index) => {
    if (expandedRow === index) {
      setExpandedRow(null);
    } else {
      setExpandedRow(index);
    }
  };

  const handleSettingButtonClick = (index, e) => {
    e.stopPropagation();
    setOpenMenuIndex(openMenuIndex === index ? null : index); // Open the menu for this row
  };

  const handleCloseMenu = () => {
    setOpenMenuIndex(null); // Close the menu
  };

  const handleAssignClick = (item, index) => {
    // Navigate to another component along with the row data
    navigate('/admin/assign', { state: { rowData: item, index: index } });
  };
  return (
    <div className={styles.tableContainer}>
      <div className={styles.horizontalScrollContainer}>
        <table className={`table ${styles.table}`}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Address</th>
              {/* {numVisibleColumns >= 3 && <th>Address</th>} */}

              {numVisibleColumns >= 3 && <th>Phone</th>}
              {numVisibleColumns >= 4 && <th>Email</th>}
              {numVisibleColumns >= 5 && <th>Deposited By</th>}
              {numVisibleColumns >= 5 && <th>Depositer Name</th>}
              {numVisibleColumns >= 5 && <th>Item</th>}
              {numVisibleColumns >= 5 && <th>Accessories</th>}
              {numVisibleColumns >= 5 && <th>Serial No</th>}
              {numVisibleColumns >= 5 && <th>Problems</th>}
              {numVisibleColumns >= 5 && <th>Bill No</th>}
              {numVisibleColumns >= 5 && <th>Bill Date</th>}
              {numVisibleColumns >= 5 && <th>Warranty</th>}
              {numVisibleColumns >= 5 && <th>Standby</th>}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <tr onClick={() => toggleExpandedRow(index)}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  {/* {numVisibleColumns >= 3 && <td>{item.address}</td>} */}

                  {numVisibleColumns >= 3 && <td>{item.phone}</td>}
                  {numVisibleColumns >= 4 && <td>{item.email}</td>}
                  {numVisibleColumns >= 5 && <td>{item.depositedBy}</td>}
                  {numVisibleColumns >= 5 && <td> {item.depositerName}</td>}
                  {numVisibleColumns >= 5 && <td>{item.item}</td>}
                  {numVisibleColumns >= 5 && <td>{item.accessories}</td>}
                  {numVisibleColumns >= 5 && <td>{item.serialNo}</td>}
                  {numVisibleColumns >= 5 && <td>{item.problems}</td>}
                  {numVisibleColumns >= 5 && <td>{item.billNo}</td>}
                  {numVisibleColumns >= 5 && <td>{item.billDate}</td>}
                  {numVisibleColumns >= 5 && <td>{item.warranty}</td>}
                  {numVisibleColumns >= 5 && <td> {item.standby}</td>}
                  <td>
                    <div className={styles.popoverContainer}>
                      {/* Conditionally render the menu */}
                      {openMenuIndex === index && (
                        <Menu
                          options={[
                            { label: 'Assign', onClick: () => handleAssignClick(item, index+1) } // Assign option
                            // { label: 'Option 2', onClick: () => console.log('Option 2 clicked') },
                            // { label: 'Option 3', onClick: () => console.log('Option 3 clicked') }
                          ]}
                          onClose={handleCloseMenu}
                        />
                      )}
                      <button className={styles.settingButton} onClick={(e) => handleSettingButtonClick(index, e)}>
                        <MdOutlineSettings />
                      </button>
                    </div>
                  </td>
                </tr>
                {expandedRow === index && (
                  <tr>
                    <td colSpan={numVisibleColumns + 2}>
                      <div className={styles.expandedRow}>
                        
                        <strong>Received Date:</strong> {item.receivedDate}<br />
                        <strong>Name:</strong> {item.name}<br />
                        <strong>Address:</strong> {item.address}<br />
                        <strong>Phone:</strong> {item.phone}<br />
                        <strong>WhatsApp:</strong> {item.whatsapp}<br />
                        <strong>Email:</strong> {item.email}<br />
                        <strong>Deposited By:</strong> {item.depositedBy}<br />
                        <strong>Depositer Name:</strong> {item.depositerName}<br />
                        <strong>Item:</strong> {item.item}<br />
                        <strong>Accessories:</strong> {item.accessories}<br />
                        <strong>Serial No:</strong> {item.serialNo}<br />
                        <strong>Problems:</strong> {item.problems}<br />
                        <strong>Bill No:</strong> {item.billNo}<br />
                        <strong>Bill Date:</strong> {item.billDate}<br />
                        <strong>Warranty:</strong> {item.warranty}<br />
                        <strong>Standby:</strong> {item.standby}<br />
                        {/* <strong>Password:</strong> {item.password}<br /> */}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
