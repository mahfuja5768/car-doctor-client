import React, { useContext, useEffect, useState } from "react";
import OrderRow from "./OrderRow";
import { AuthContext } from "../../Contexts/AuthProvider";
import Swal from "sweetalert2";
import axiosSecure from "../../components/hooks/useAxiosSecure";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  // const url = `https://car-doctor-server-in.vercel.app/orders?email=muna@myra.com`;
  // const url = `https://car-doctor-server-in.vercel.app/orders?email=${user?.email}`;
  const url = `/orders?email=${user?.email}`;
  useEffect(() => {
    // axios.get(url, {withCredentials:true})
    // .then(res=> {
    //   // console.log(res.data)
    //   setOrders(res.data)
    // })
    axiosSecure.get(url).then((res) => {
      // console.log(res.data)
      setOrders(res.data);
    });
  }, [axiosSecure]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`https://car-doctor-server-in.vercel.app/orders/${_id}`)
          .then((data) => {
            // console.log(data.data);
            if (data.data.deletedCount > 0) {
              const remainingOrders = orders.filter(
                (order) => order._id !== _id
              );
              // console.log(remainingOrders);
              setOrders(remainingOrders);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((err) => console.log(err.message));
      }
    });
  };

  const handleStatusUpdate = (_id) => {
    console.log(_id);

    axiosSecure
      .patch(`https://car-doctor-server-in.vercel.app/orders/${_id}`, {
        status: "confirm",
      })
      .then((data) => {
        // console.log(data.data);
        if (data.data.modifiedCount > 0) {
          const remainingOrders = orders.filter((order) => order._id !== _id);
          const updatedOrder = orders.find((order) => order._id === _id);
          updatedOrder.status = "confirm";
          const newOrder = [updatedOrder, ...remainingOrders];
          setOrders(newOrder);

          Swal.fire({
            title: "Success!",
            text: "Successfully order updated!",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="m-5">
      <h2 className="text-4xl mb-5 text-center my-7">
        You have {orders.length} orders.
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Cancel Order</th>
              <th>Image</th>
              <th>Name</th>
              <th>Service Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
