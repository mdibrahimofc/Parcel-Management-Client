import React from "react";
import Chart from "react-apexcharts";

const StatisticsPage = () => {
  const barChartOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["Delivered", "In Transit", "Pending", "Cancelled"],
    },
    colors: ["#1E40AF"],
    title: {
      text: "Parcel Status Overview",
      align: "center",
      style: {
        fontSize: "18px",
      },
    },
  };

  const barChartSeries = [
    {
      name: "Parcels",
      data: [120, 80, 50, 10],
    },
  ];

  const lineChartOptions = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    colors: ["#16A34A"],
    title: {
      text: "Monthly Parcel Trends",
      align: "center",
      style: {
        fontSize: "18px",
      },
    },
  };

  const lineChartSeries = [
    {
      name: "Parcels",
      data: [30, 50, 80, 70, 90, 120],
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Admin Dashboard - Statistics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white shadow-lg rounded-2xl p-4">
          <Chart
            options={barChartOptions}
            series={barChartSeries}
            type="bar"
            height={350}
          />
        </div>

        {/* Line Chart */}
        <div className="bg-white shadow-lg rounded-2xl p-4">
          <Chart
            options={lineChartOptions}
            series={lineChartSeries}
            type="line"
            height={350}
          />
        </div>
      </div>

      <div className="mt-6 bg-white shadow-lg rounded-2xl p-4">
        <h2 className="text-xl font-semibold mb-4">Summary Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-gray-700">Total Parcels</p>
            <p className="text-2xl font-bold">260</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <p className="text-gray-700">Delivered</p>
            <p className="text-2xl font-bold">120</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <p className="text-gray-700">In Transit</p>
            <p className="text-2xl font-bold">80</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg">
            <p className="text-gray-700">Cancelled</p>
            <p className="text-2xl font-bold">10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
