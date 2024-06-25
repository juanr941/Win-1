import React, { useState, useEffect } from 'react';
import { fetchCompanyOutlook } from './services';
import { formatCompanyOutlook } from './Utils2';

const CompanyOutlookTable = ({ symbol }) => {
    const [companyOutlook, setCompanyOutlook] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const data = await fetchCompanyOutlook(symbol);
                setCompanyOutlook(data);

            } catch (err) {
                setError(err);
                console.error('Error:', err);
            }
        };

        if (symbol) {
            fetchData();
        }
    }, [symbol]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Company Outlook for {symbol}</h1>
            {companyOutlook ? (
          <table>
          <tbody className='color-dark'>
              {/* <tr>
                  <th>Symbol</th>
                  <td>{companyOutlook.symbol}</td>
              </tr> */}
              <tr>
                  <th>Name</th>
                  <td>{companyOutlook.name}</td>
              </tr>
              <tr>
                  <th>Currency</th>
                  <td>{companyOutlook.currency}</td>
              </tr>
              <tr>
                  <th>Exchange</th>
                  <td>{companyOutlook.exchangeShortName}</td>
              </tr>
              {/* <!-- 
              <tr>
                  <th>Full-Time Employees</th>
                  <td>{companyOutlook.fullTimeEmployees}</td>
              </tr>
              <tr>
                  <th>Phone</th>
                  <td>{companyOutlook.phone}</td>
              </tr>
              <tr>
                  <th>Address</th>
                  <td>{companyOutlook.address}</td>
              </tr>
              <tr>
                  <th>City</th>
                  <td>{companyOutlook.city}</td>
              </tr>
              <tr>
                  <th>State</th>
                  <td>{companyOutlook.state}</td>
              </tr>
              <tr>
                  <th>Zip</th>
                  <td>{companyOutlook.zip}</td>
              </tr>
              <tr>
                  <th>DCF Difference</th>
                  <td>{companyOutlook.dcfDiff}</td>
              </tr>
              <tr>
                  <th>DCF</th>
                  <td>{companyOutlook.dcf}</td>
              </tr>
              --> */}
          </tbody>
      </table>
      
            ) : (
                <p> Please type the symbol</p>
            )}
        </div>
    );
};

export default CompanyOutlookTable;
