/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Avatar } from "@material-tailwind/react";

const TestimonialCard = ({ name, title, text }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Avatar
          variant="circular"
          alt="user 1"
          className="border-2 border-white hover:z-10 focus:z-10"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
        <div className="ml-4">
          <h3 className="font-poppins text-lg font-semibold">{name}</h3>
          <p className="font-poppins text-gray-500">{title}</p>
        </div>
      </div>
      <p className="font-poppins text-gray-700">{text}</p>
    </div>
  );
};

export default TestimonialCard;
