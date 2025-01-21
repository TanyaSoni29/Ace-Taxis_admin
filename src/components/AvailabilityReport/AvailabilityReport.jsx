/** @format */
import Sidebar from "../Sidebar/Sidebar";

const AvailabilityReport = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Driver Availability Report #: 0</h1>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
            Load Availability History
          </button>
        </div>

        {/* Filters Section */}
        <div className="flex items-center mt-6">
          {/* Driver Number Input */}
          <div className="mr-6">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="driver-number">
              Driver Number
            </label>
            <input
              type="number"
              id="driver-number"
              defaultValue="0"
              className="w-28 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date Range */}
          <div className="flex items-center">
            <div className="mr-4">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="start-date">
                Start Date
              </label>
              <input
                type="date"
                id="start-date"
                defaultValue="2024-12-21"
                className="w-40 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="end-date">
                End Date
              </label>
              <input
                type="date"
                id="end-date"
                defaultValue="2025-01-21"
                className="w-40 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* No Data Section */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
          <p className="text-blue-700 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m0-4h.01M21 12c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8z"
              />
            </svg>
            No Data
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityReport;
