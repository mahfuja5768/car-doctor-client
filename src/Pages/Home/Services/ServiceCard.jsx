import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  // console.log(service);
  const { service_id, img, price, title, _id } = service;

  return (
    <div className="card w-96 bg-violet-100 shadow-xl p-4">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <hr />
        <h2 className="card-title">{title}</h2>
        <p className="text-2xl font-semibold text-orange-600 ">
          Price: ${price}
        </p>
        <div className="card-actions justify-end">
          <div className="-600 font-bold flex justify-between items-center">
            <Link
              to={`/checkout/${_id}`}
              className="border-orange-600 border-2 flex items-center p-2 rounded-full px-4"
            >
              <p className="me-3">Check Out</p>
              <FaArrowRight className="cursor-pointer text-orange-600"></FaArrowRight>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
