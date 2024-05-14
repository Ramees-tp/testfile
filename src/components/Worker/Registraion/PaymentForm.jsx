/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";

import { useState } from "react";

const PaymentForm = ({ formData, setFormData }) => {
  const [touchedFields, setTouchedFields] = useState({
    IFC: false,
    accountNumber: false,
    panCardNumber: false,
    password: false,
    confirmPass: false,
  });
  // const [formData, setFormData] = useState({
  //   IFC: "",
  //   accountNumber: "",
  //   panCardNumber: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const validateIFC = (value) => {
    const regex = /^[A-Z]{4}[0][A-Z0-9]{6}$/;
    return regex.test(value);
  };

  const validateAccountNumber = (value) => {
    const regex = /^\d{9,18}$/;
    return regex.test(value);
  };

  const validatePanCardNumber = (value) => {
    const regex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    return regex.test(value);
  };

  const validatePassword = (value) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return value.length >= 8;
  };



  return (
    <div className="w-full mx-auto flex flex-col  " >
      <div className="mb-4">
        <label
          className="block text-white text-sm font-semibold mb-2"
          htmlFor="IFC"
        >
          IFC Code
        </label>
        <input
          type="text"
          id="IFC"
          name="IFC"
          value={formData.IFC}
          onChange={(event) =>
            setFormData({ ...formData, IFC: event.target.value })
          }
          onBlur={() => setTouchedFields({ ...touchedFields, IFC: true })}
          className={`w-full tm:p-2 p-2 border rounded-md focus:outline-none ${
            touchedFields.IFC && validateIFC(formData.IFC) ? "border-blue-500" : "border-red-500"
          }`}
        />
         {touchedFields.IFC && !validateIFC(formData.IFC) && (
          <p className="text-red-500 text-sm">Invalid IFC code</p>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block text-white text-sm font-semibold mb-2"
          htmlFor="accountNumber"
        >
          Account Number
        </label>
        <input
          type="number"
          id="accountNumber"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={(event) =>
            setFormData({ ...formData, accountNumber: event.target.value })
          }
          onBlur={() => setTouchedFields({ ...touchedFields, accountNumber: true })}
          className={`w-full tm:p-2 p-2 border rounded-md focus:outline-none ${
            touchedFields.accountNumber && validateAccountNumber(formData.accountNumber)
              ? "border-blue-500"
              : "border-red-500"
          }`}
        />
        {touchedFields.accountNumber && !validateAccountNumber(formData.accountNumber) && (
          <p className="text-red-500 text-sm">Invalid account number</p>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block text-white text-sm font-semibold mb-2"
          htmlFor="panCardNumber"
        >
          Pan card Number
        </label>
        <input
          type="text"
          id="panCardNumber"
          name="panCardNumber"
          value={formData.panCardNumber}
          onChange={(event) =>
            setFormData({ ...formData, panCardNumber: event.target.value })
          }
          onBlur={() => setTouchedFields({ ...touchedFields, panCardNumber: true })}
          className={`w-full tm:p-2 p-2 border rounded-md focus:outline-none ${
            touchedFields.panCardNumber && validatePanCardNumber(formData.panCardNumber)
              ? "border-blue-500"
              : "border-red-500"
          }`}
        />
        {touchedFields.panCardNumber && !validatePanCardNumber(formData.panCardNumber) && (
          <p className="text-red-500 text-sm">Invalid PAN card number</p>
        )}
      </div>

      <hr className="" />

      <div className="mb-4 ">
        <label
          className="block text-white text-sm font-semibold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="text"
          id="password"
          name="password"
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
          onBlur={() => setTouchedFields({ ...touchedFields, password: true })}
          className=" tm:p-2 p-2 border rounded-md focus:outline-none focus:border-blue-500 sm:w-[50%] tm:w-[50%] w-[80%]"/>
          {touchedFields.password && !validatePassword(formData.password) && (
          <p className="text-red-500 text-sm">
            Password must be at least 8 characters long
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-white text-sm font-semibold mb-2"
          htmlFor="confirmPass"
        >
          Confirm Password
        </label>
        <div className="flex sm:flex-row flex-col self-end">
          <input
            type="text"
            id="confirmPass"
            name="confirmPass"
            value={formData.confirmPass}
            onChange={(event) =>
              setFormData({ ...formData, confirmPass: event.target.value })
            }
            className="sm:mb-0 mb-4 tm:p-2 p-2 border rounded-md focus:outline-none focus:border-blue-500 sm:w-[50%] tm:w-[50%] w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
