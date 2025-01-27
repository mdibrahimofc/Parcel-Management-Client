import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query"; // For fetching data with Tanstack Query
import toast from "react-hot-toast";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const TopDeliveryMan = () => {
  const axiosSecure = useAxiosSecure()

  const { data, error, isLoading } = useQuery({
    queryKey: ["topDeliveryMan"],
    queryFn: async () => {
      const {data} = await axiosSecure.get("/parcel/topDeliveryMen")
      return data
    }
  });
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Top Delivery Men</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {data?.map((deliveryMan) => (
            <div key={deliveryMan._id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={deliveryMan.image || "https://via.placeholder.com/150"}
                alt={deliveryMan.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-medium">{deliveryMan.name}</h3>
              <p className="text-gray-600">Parcels Delivered: {deliveryMan.deliveryCount}</p>
              <p className="text-gray-600">Average Rating: {deliveryMan.rating ? Math.ceil(deliveryMan.rating / deliveryMan.deliveryCount) : 0} / 5</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDeliveryMan;
