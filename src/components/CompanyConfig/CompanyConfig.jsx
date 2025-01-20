/** @format */

import Sidebar from "../Sidebar/Sidebar";

const CompanyConfig = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow bg-gray-50 min-h-screen p-8">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Company Setup</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Enter Company Name"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <label className="block text-sm font-medium text-gray-600 mt-4">
                Address
              </label>
              <input
                type="text"
                placeholder="Line 1"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Line 2"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Line 3"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Line 4"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <label className="block text-sm font-medium text-gray-600 mt-4">
                Postcode
              </label>
              <input
                type="text"
                placeholder="Enter Postcode"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Right Column */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <label className="block text-sm font-medium text-gray-600 mt-4">
                Web
              </label>
              <input
                type="text"
                placeholder="Enter Website"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <label className="block text-sm font-medium text-gray-600 mt-4">
                Phone
              </label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <label className="block text-sm font-medium text-gray-600 mt-4">
                Company No
              </label>
              <input
                type="text"
                placeholder="Enter Company Number"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <label className="block text-sm font-medium text-gray-600 mt-4">
                VAT No
              </label>
              <input
                type="text"
                placeholder="Enter VAT Number"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <label className="block text-sm font-medium text-gray-600 mt-4">
                Card Rate %
              </label>
              <input
                type="number"
                step="0.1"
                placeholder="Enter Card Rate"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <label className="block text-sm font-medium text-gray-600 mt-4">
                Revolut Secret Key
              </label>
              <input
                type="text"
                placeholder="Enter Revolut Secret Key"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyConfig;
