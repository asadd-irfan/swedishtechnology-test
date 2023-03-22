import React, { useState, useEffect } from "react";
import { Line, Pie,Doughnut } from "react-chartjs-2";

const Reporting = () => {
  const [requestData, setRequestData] = useState({});
  const [paymentData, setPaymentData] = useState({});
  const [progressData, setProgressData] = useState({});
  
  useEffect(() => {
    const fetchReportData = async () => {
      try {
        // Fetch report data from backend API
        const response = await fetch("https://example.com/api/report");
        const data = await response.json();

        // Format data for chart.js
        const requestsData = {
          labels: data.requests.labels,
          datasets: [
            {
              label: "Total Requests",
              data: data.requests.data,
              fill: false,
              borderColor: "#8884d8",
            },
          ],
        };
        const paymentsData = {
          labels: data.payments.labels,
          datasets: [
            {
              label: "Total Payments",
              data: data.payments.data,
              fill: false,
              borderColor: "#82ca9d",
            },
          ],
        };
        const progressData = {
          labels: data.progress.labels,
          datasets: [
            {
              label: "Construction Progress",
              data: data.progress.data,
              fill: false,
              borderColor: "#ffc107",
            },
          ],
        };
        
        // Set state with formatted data
        setRequestData(requestsData);
        setPaymentData(paymentsData);
        setProgressData(progressData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReportData();
  }, []);

  return (
    <div>
      <h1>Custom Reporting</h1>
      <div>
        <h2>Requests</h2>
        <Line data={requestData} />
      </div>
      <div>
        <h2>Payments</h2>
        <Doughnut data={paymentData} />

      </div>
      <div>
        <h2>Construction Progress</h2>
        <Pie data={progressData} />
      </div>
    </div>
  );
};

export default Reporting;
