import React from "react";
import Chart from "react-apexcharts";



const SplineAreaChart = () => {
  const options = {
    chart: {
      type: "area",
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    colors: ["#58508D", "#BC5090"],
  };

  const series = [
    {
      name: "Income",
      data: [30, 40, 35, 50, 49, 60, 70],
    },
    {
      name: "Expense",
      data: [23, 12, 54, 61, 32, 56, 81],
    },
  ];

  return <Chart options={options} series={series} type="area" height={350} />;
};

export default SplineAreaChart;
