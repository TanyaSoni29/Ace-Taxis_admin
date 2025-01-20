/** @format */

import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";

const AddAccounts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data: ", data);
    // Add your form submission logic here
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        contactName: "",
        businessName: "",
        address1: "",
        address2: "",
        address3: "",
        address4: "",
        postcode: "",
        telephone: "",
        email: "",
        poNumber: "",
        reference: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
    <Sidebar />
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-10">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Accounts</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Contact Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Contact Name
            </label>
            <input
              type="text"
              placeholder="Enter Contact Name"
              {...register("contactName", { required: "Contact Name is required" })}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.contactName && (
              <span className="text-red-500 text-xs">
                {errors.contactName.message}
              </span>
            )}
          </div>

          {/* Business Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Business Name
            </label>
            <input
              type="text"
              placeholder="Enter Business Name"
              {...register("businessName", { required: "Business Name is required" })}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.businessName && (
              <span className="text-red-500 text-xs">
                {errors.businessName.message}
              </span>
            )}
          </div>

          {/* Address 1 */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Address 1
            </label>
            <input
              type="text"
              placeholder="Enter Address 1"
              {...register("address1", { required: "Address 1 is required" })}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.address1 && (
              <span className="text-red-500 text-xs">
                {errors.address1.message}
              </span>
            )}
          </div>

          {/* Address 2 */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Address 2
            </label>
            <input
              type="text"
              placeholder="Enter Address 2"
              {...register("address2")}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address 3 */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Address 3
            </label>
            <input
              type="text"
              placeholder="Enter Address 3"
              {...register("address3")}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address 4 */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Address 4
            </label>
            <input
              type="text"
              placeholder="Enter Address 4"
              {...register("address4")}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Postcode */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Postcode
            </label>
            <input
              type="text"
              placeholder="Enter Postcode"
              {...register("postcode", { required: "Postcode is required" })}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.postcode && (
              <span className="text-red-500 text-xs">
                {errors.postcode.message}
              </span>
            )}
          </div>

          {/* Telephone */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Telephone
            </label>
            <input
              type="text"
              placeholder="Enter Telephone Number"
              {...register("telephone")}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email Address"
              {...register("email", { required: "Email is required" })}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* PO Number */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              PO Number
            </label>
            <input
              type="text"
              placeholder="Enter PO Number"
              {...register("poNumber")}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Reference */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Reference
            </label>
            <input
              type="text"
              placeholder="Enter Reference"
              {...register("reference")}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 col-span-2 justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add New
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddAccounts;
