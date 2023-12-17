import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
  // console.log(order)
  const { customerName, price, email, date, service, _id, img, status } = order;

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-ghost bg-red-900 text-white"
          >
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" w-24 rounded">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">{customerName}</div>
      </td>
      <td>
        <br />
        <div className="font-bold">{service}</div>
      </td>
      <td>{email}</td>
      <td>
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>
        {status ? (
          <span className=" normal-case text-red-900 font-bold">
            Order Confirmed{" "}
          </span>
        ) : (
          <button
            onClick={() => handleStatusUpdate(_id)}
            className="btn normal-case bg-red-900 text-white"
          >
            Please Confirm
          </button>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
