import React from "react";
import Chart from "react-apexcharts";




const PieChart = () => {
     const options = {
       series: [24, 44, 8],
       labels: ["onDelivery", "Delivered", "Cancelled"],
       plotOptions: {
         pie: {
           expandOnClick: false,
           donut: {
             size: "50px",
             labels: {
               show: true,
               total: {
                 show: true,
                 showAlways: true,
                 fontSize: "20px",
                 color: "#03001C",
               },
             },
           },
         },
       },
       colors: ["#FF6361", "#58508D", "#BC5090"],
     };
     const series = [24, 44, 8];
  return (
    <Chart
      options={options}
      series={series}
      type="donut"
      width="90%"
      height={190}
    />
  );
}

export default PieChart