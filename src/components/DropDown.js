import React from "react";

const DropDown = () => {
  return (
    <div className="relative w-full lg:max-w-sm block lg:hidden">
      <select className="w-full p-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none  focus:border-indigo-600 md:mt-10">
        <option>Restaurant</option>
        <option>Cottage</option>
        <option>Castle</option>
        <option>Fastast City</option>
        <option>Beach</option>
        <option>Cabins</option>
        <option>Off-grid</option>
        <option>Farm</option>
        <option className="font-[700]">Location</option>
      </select>
    </div>
  );
};
export default DropDown;
