/** @format */

const VatOutput = () => {
    return (
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <div className="w-80 bg-white shadow-lg border-r">
          {/* Add Sidebar if needed */}
        </div>
  
        {/* Main Content */}
        <div className="flex-1 p-6 space-y-6">
          {/* Header Section */}
          <div className="bg-white shadow rounded-lg p-4">
            <h1 className="text-2xl font-semibold">Calculate VAT on Commission</h1>
            <p className="text-gray-600 mt-2">Select date range to calculate VAT</p>
          </div>
  
          {/* Form Section */}
          <div className="bg-white shadow rounded-lg p-6 space-y-6">
            {/* Date Range */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <label className="mr-4 font-medium text-gray-700">Search by date</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="date"
                    defaultValue="2025-01-21"
                    className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-gray-500">→</span>
                  <input
                    type="date"
                    defaultValue="2025-01-21"
                    className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
  
              {/* Button */}
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow">
                CREATE CSV FILE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default VatOutput;
  