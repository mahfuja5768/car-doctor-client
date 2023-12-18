import { Link, useLoaderData } from "react-router-dom";
import bg from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import axiosSecure from "../../components/hooks/useAxiosSecure";

const Checkout = () => {
  const service = useLoaderData();
  const { img, price, service_id, title, _id } = service;
  const { user } = useContext(AuthContext);
  // console.log(user?.email)

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const name = form.name.value;
    const email = user?.email;

    const order = {
      customerName: name,
      img,
      email,
      date,
      service_id: _id,
      service: title,
      price,
    };
    console.log(order);

    axiosSecure
      .post("http://localhost:5000/orders", order)
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err.message));

    Swal.fire({
      title: "Success!",
      text: "Successfully order placed!",
      icon: "success",
      confirmButtonText: "Done",
    });
    form.reset();
  };

  return (
    <div className="mx-auto ">
      <img src={bg} alt="" />
      <h1 className="text-6xl font-bold text-white -mt-24 text-center mb-24">
        CheckOut
      </h1>
      <h2 className="text-4xl font-bold text-center ">
        Service Title: {title}
      </h2>
      <div className="hero w-full">
        <div className="hero-content grid  md:grid-cols-2 gap-5 py-1 flex-col lg:flex-row my-8">
          <div className="text-center lg:text-left">
            <img className="w-3/4" src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-12">
            <form onSubmit={handleSubmit} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Name</span>
                </label>
                <input
                  defaultValue={user?.displayName}
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Date</span>
                </label>
                <input
                  name="date"
                  type="date"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Email</span>
                </label>
                <input
                  defaultValue={user?.email}
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Due amount</span>
                </label>
                <input
                  defaultValue={`$ ` + price}
                  type="text"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary normal-case"
                  type="submit"
                  value=" Order Confirm"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
