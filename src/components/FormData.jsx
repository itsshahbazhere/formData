import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const FormData = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    comments: false,
    candidates: false,
    offers: false,
    notifications: "",
  });

  console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  
  function submitHandler(event) {
    event.preventDefault();
    console.log("Saved successfully");
    toast.success("Saved successfully", {
      position: "bottom-right",
    });
    console.log(formData);
  }

  return (
    <div className="bg-white  p-10 max-w-[1000px] mx-auto shadow-2xl">
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <p className="font-bold">First Name</p>
            <input
              className="w-full border border-blue-500 rounded-md p-2 mt-2 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              type="text"
              placeholder="Enter first name..."
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
            />
          </div>

          <div>
            <p className="font-bold mt-4">Last Name</p>
            <input
              type="text"
              className="w-full border border-blue-500 rounded-md p-2 mt-2 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter last name..."
              name="lastName"
              onChange={changeHandler}
              value={formData.lastName}
            />
          </div>

          <div>
            <p className="font-bold mt-4">Email Address</p>
            <input
              className="w-full border border-blue-500 rounded-md p-2 mt-2 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              type="email"
              placeholder="example123@xyz.com"
              name="email"
              onChange={changeHandler}
              value={formData.email}
            />
          </div>

          <div>
            <p className="font-bold mt-4">Country</p>
            <select
              className="w-full border border-blue-500 rounded-md p-2 mt-2 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              name="country"
              id="country"
              value={formData.country}
              onChange={changeHandler}
            >
              <option className="text-gray-400" value="">
                Select a country
              </option>
              <option value="india">India</option>
              <option value="us">United States</option>
              <option value="maxico">Maxico</option>
              <option value="canada">Canada</option>
            </select>
          </div>

          <div>
            <p className="font-bold mt-4">Street Address</p>
            <input
              className="w-full border border-blue-500 rounded-md p-2 mt-2 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              type="text"
              placeholder="Enter your address..."
              name="address"
              onChange={changeHandler}
              value={formData.address}
            />
          </div>

          <div>
            <p className="font-bold mt-4">City</p>
            <input
              className="w-full border border-blue-500 rounded-md p-2 mt-2 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              type="text"
              placeholder="Enter your city..."
              name="city"
              onChange={changeHandler}
              value={formData.city}
            />
          </div>

          <div>
            <p className="font-bold mt-4">State / Province</p>
            <input
              className="w-full border border-blue-500 rounded-md p-2 mt-2 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              type="text"
              placeholder="Enter your state..."
              name="state"
              onChange={changeHandler}
              value={formData.state}
            />
          </div>

          <div>
            <p className="font-bold mt-4">ZIP / Postal Code</p>
            <input
              className="w-full border border-blue-500 rounded-md p-2 mt-2 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              type="zipcode"
              placeholder="Enter zip code..."
              name="zipcode"
              onChange={changeHandler}
              value={formData.zipcode}
            />
          </div>
        </div>

        <fieldset>
          <legend className="font-bold mt-6">By Email</legend>

          <div className="flex mt-2">
            <input
              className="mr-2 h-4 w-4 mt-1"
              type="checkbox"
              name="comments"
              id="comments"
              onChange={changeHandler}
              checked={formData.comments}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p className="text-sm text-gray-500">
                Get notified when someones posts a comment on a posting.
              </p>
            </div>
          </div>

          <div className="flex mt-2">
            <input
              className="mr-2 h-4 w-4 mt-1"
              type="checkbox"
              name="candidates"
              id="candidates"
              onChange={changeHandler}
              checked={formData.candidates}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p className="text-sm text-gray-500">
                Get notified when a candidate applies for a job.
              </p>
            </div>
          </div>

          <div className="flex mt-2">
            <input
              className="mr-2 h-4 w-4 mt-1"
              type="checkbox"
              name="offers"
              id="offers"
              onChange={changeHandler}
              checked={formData.offers}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p className="text-sm text-gray-500">
                Get notified when a candidate accepts or rejects an offer.
              </p>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-bold mt-6 ">Push Notifications</legend>
          <p className="text-sm text-gray-500">
            These are delivered via SMS to your mobile phone.
          </p>

          <div className="mt-3">
            <input
              className="mr-2 w-4 h-4"
              type="radio"
              name="notifications"
              id="everything-on"
              value="everything-on"
              onChange={changeHandler}
            />
            <label htmlFor="everything-on">Everything</label>
          </div>

          <div className="mt-1">
            <input
              className="mr-2 w-4 h-4"
              type="radio"
              name="notifications"
              id="mail-on"
              value="mail-on"
              onChange={changeHandler}
            />
            <label htmlFor="mail-on">Same as email</label>
          </div>

          <div className="mt-1">
            <input
              className="mr-2 w-4 h-4"
              type="radio"
              name="notifications"
              id="no-notification"
              value="no-notification"
              onChange={changeHandler}
            />
            <label htmlFor="no-notification">No push notifications</label>
          </div>
        </fieldset>

        <button className="border bg-blue-500 hover:bg-blue-600 px-6 py-2 text-white shadow-sm hover:shadow-lg transition-all duration-200 text-lg rounded-md mt-5">
          Save
        </button>
      </form>
    </div>
  );
};

export default FormData;
