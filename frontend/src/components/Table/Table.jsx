// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

// const Table = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://service-management-ashy.vercel.app/api/jobs');
//       setData(response.data.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <MDBTable responsive>
//       <MDBTableHead>
//         <tr>
//           <th scope='col'>Received Date</th>
//           <th scope='col'>Name</th>
//           <th scope='col'>Address</th>
//           <th scope='col'>Phone</th>
//           <th scope='col'>WhatsApp</th>
//           <th scope='col'>Email</th>
//           <th scope='col'>Deposited By</th>
//           <th scope='col'>Depositor Name</th>
//           <th scope='col'>Item</th>
//           <th scope='col'>Accessories</th>
//           <th scope='col'>Serial No</th>
//           <th scope='col'>Problems</th>
//           <th scope='col'>Bill/AMC No</th>
//           <th scope='col'>Bill/AMC Date</th>
//           <th scope='col'>Warranty</th>
//           <th scope='col'>Stand By</th>
//           <th scope='col'>Password</th>
//         </tr>
//       </MDBTableHead>
//       <MDBTableBody>
//         {data.map((item, index) => (
//           <tr key={index}>
//             <td>{item.receivedDate}</td>
//             <td>{item.name}</td>
//             <td>{item.address}</td>
//             <td>{item.phone}</td>
//             <td>{item.whatsapp}</td>
//             <td>{item.email}</td>
//             <td>{item.depositedBy}</td>
//             <td>{item.depositorName}</td>
//             <td>{item.item}</td>
//             <td>{item.accessories}</td>
//             <td>{item.serialNo}</td>
//             <td>{item.problems}</td>
//             <td>{item.billNo}</td>
//             <td>{item.billDate}</td>
//             <td>{item.warranty ? 'Yes' : 'No'}</td>
//             <td>{item.standby ? 'Yes' : 'No'}</td>
//             <td>{item.password}</td>
//           </tr>
//         ))}
//       </MDBTableBody>
//     </MDBTable>
//   );
// };

// export default Table;
// Table.js
// Table.js
// Table.js
// Table.js
// Table.js
// Table.js
// Table.js
// Table.js
// Table.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Table.module.css';

const Table = () => {
  const [data, setData] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [numVisibleColumns, setNumVisibleColumns] = useState(5);

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
    } else if (screenWidth < 992) {
      setNumVisibleColumns(4);
    } else {
      setNumVisibleColumns(5);
    }
  };

  const toggleExpandedRow = (index) => {
    if (expandedRow === index) {
      setExpandedRow(null);
    } else {
      setExpandedRow(index);
    }
  };

  return (
    <div className={styles.tableContainer}>
      <table className={`table ${styles.table}`}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            {numVisibleColumns >= 3 && <th>Phone</th>}
            {numVisibleColumns >= 4 && <th>Email</th>}
            {numVisibleColumns >= 5 && <th>Deposited By</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <tr onClick={() => toggleExpandedRow(index)}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
                {numVisibleColumns >= 3 && <td>{item.phone}</td>}
                {numVisibleColumns >= 4 && <td>{item.email}</td>}
                {numVisibleColumns >= 5 && <td>{item.depositedBy}</td>}
                <td>
                  <button className={styles.eyeButton} onClick={(e) => {
                    e.stopPropagation();
                    toggleExpandedRow(index);
                  }}>
                    &#128065;
                  </button>
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
                      <strong>Password:</strong> {item.password}<br />
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
