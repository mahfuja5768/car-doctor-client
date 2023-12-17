import React, { useContext, useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("https://car-doctor-server-in.vercel.app/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mb-5">
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-orange-600  mb-4">Survice</p>
        <h2 className="text-4xl font-bold  mb-5">Our Survice Area</h2>
        <p className="w-1/2 mx-auto mb-10">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In aut repudiandae et a id nisi.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
