import React from "react";
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="hero my-32 ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative w-1/2">
        <img
          src={person}
          className="w-4/5 h-full rounded-lg shadow-2xl"
        />
        <img
          src={parts}
          className="absolute w-3/5 right-5 top-1/2 border-8 rounded-lg shadow-2xl"
        />
        </div>
        <div className="w-1/2">
            <p className="text-2xl font-bold text-orange-600  mb-4">About Us</p>
          <h1 className="text-5xl font-bold">We are qualified 
         <br /> & of exprience <br /> in this field</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et excepturi in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p>
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In aut repudiandae et
            a id nisi.
          </p>
          <button className="btn me-5 btn-info mt-5">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
