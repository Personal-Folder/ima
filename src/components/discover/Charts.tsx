"use client";

import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const ParamedicCharts: React.FC = () => {
  // Emergency Response Data
  const emergencyResponseData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Emergency Calls",
        data: [65, 59, 80, 81, 56],
        backgroundColor: "rgba(228, 39, 43, 0.7)",
        borderColor: "#E4272B",
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  };

  // Response by Region
  const regionData = {
    labels: ["North", "South", "East", "West"],
    datasets: [
      {
        label: "Responses",
        data: [50, 100, 150, 200],
        backgroundColor: ["#E4272B", "#C21F23", "#487DDC", "#3558B8"],
        borderColor: ["#E4272B", "#C21F23", "#487DDC", "#3558B8"],
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  };

  // Service Type Distribution
  const serviceTypeData = {
    labels: ["Trauma", "Medical", "Cardiac", "Burn"],
    datasets: [
      {
        data: [300, 200, 150, 100],
        backgroundColor: ["#BE181B", "#E4272B", "#487DDC", "#5A7FE6"],
        borderColor: ["#BE181B", "#E4272B", "#487DDC", "#5A7FE6"],
        borderWidth: 2,
      },
    ],
  };

  // Staff Distribution
  const staffData = {
    labels: ["Paramedics", "EMTs", "Drivers"],
    datasets: [
      {
        data: [120, 150, 80],
        backgroundColor: ["#E4272B", "#487DDC", "#C21F23"],
        borderColor: ["#E4272B", "#487DDC", "#C21F23"],
        borderWidth: 2,
      },
    ],
  };

  const doughnutOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#374151",
          font: { size: 12, weight: 500 },
          padding: 15,
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 12,
      },
    },
    cutout: "65%",
  };

  const barChartOptions: ChartOptions<"bar"> = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#374151",
          font: { size: 12, weight: 500 },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 12,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#6B7280" },
      },
      y: {
        grid: { color: "rgba(0, 0, 0, 0.05)" },
        ticks: { color: "#6B7280" },
      },
    },
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Performance Analytics
        </h1>
        <p className="text-gray-600">Real-time insights into our operations</p>
      </div>

      {/* Cards Grid - Minimalist Design */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Emergency Response Chart */}
          <div className="bg-linear-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-8 hover:border-[#E4272B] transition-all duration-300 group">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-6 bg-[#E4272B] rounded"></div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Emergency Calls
                  </h3>
                </div>
                <p className="text-sm text-gray-500">Monthly Response Volume</p>
              </div>
              <span className="inline-block px-3 py-1 bg-red-50 text-[#E4272B] text-xs font-semibold rounded-full">
                Active
              </span>
            </div>
            <div className="h-[280px]">
              <Bar data={emergencyResponseData} options={barChartOptions} />
            </div>
          </div>

          {/* Service Distribution Chart */}
          <div className="bg-linear-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-8 hover:border-[#487DDC] transition-all duration-300 group">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-6 bg-[#487DDC] rounded"></div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Service Types
                  </h3>
                </div>
                <p className="text-sm text-gray-500">
                  Case Distribution by Category
                </p>
              </div>
              <span className="inline-block px-3 py-1 bg-blue-50 text-[#487DDC] text-xs font-semibold rounded-full">
                Monitored
              </span>
            </div>
            <div className="h-[280px] flex items-center justify-center">
              <Doughnut data={serviceTypeData} options={doughnutOptions} />
            </div>
          </div>

          {/* Staff Distribution Chart */}
          <div className="bg-linear-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-8 hover:border-[#3558B8] transition-all duration-300 group">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-6 bg-[#3558B8] rounded"></div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Team Composition
                  </h3>
                </div>
                <p className="text-sm text-gray-500">
                  Current Staff Distribution
                </p>
              </div>
              <span className="inline-block px-3 py-1 bg-blue-50 text-[#3558B8] text-xs font-semibold rounded-full">
                Staffed
              </span>
            </div>
            <div className="h-[280px] flex items-center justify-center">
              <Doughnut data={staffData} options={doughnutOptions} />
            </div>
          </div>
          {/* Regional Response Chart */}
          <div className="bg-linear-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-8 hover:border-[#BE181B] transition-all duration-300 group">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-6 bg-[#BE181B] rounded"></div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Regional Coverage
                  </h3>
                </div>
                <p className="text-sm text-gray-500">
                  Responses by Geographic Area
                </p>
              </div>
              <span className="inline-block px-3 py-1 bg-red-50 text-[#BE181B] text-xs font-semibold rounded-full">
                Online
              </span>
            </div>
            <div className="h-[280px]">
              <Bar data={regionData} options={barChartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParamedicCharts;
