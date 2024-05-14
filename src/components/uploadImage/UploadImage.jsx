import React from "react";

function UploadImage({ handleChange }) {
  return (
    <div>
      <label
        className="block text-white text-sm font-semibold mb-2"
        htmlFor="ProfileImage"
      >
        Profile Photo
      </label>
      <input
        type="file"
        id="profileImage"
        name="profileImage"
        accept="image/*"
        onChange={handleChange}
        className="w-full bg-white rounded-2xl block text-sm text-slate-600 focus:outline-none focus:border-blue-500 shadow-md   file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-200 file:text-violet-700
                hover:file:bg-violet-100 hover:file:cursor-pointer"
      />
    </div>
  );
}

export default UploadImage;
