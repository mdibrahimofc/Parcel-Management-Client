import useAuth from '@/hooks/useAuth';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { number } from 'prop-types';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const UpdateParcel = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const [prices, setPrices] = useState(0)
    const [parcels, setParcels] = useState({})

      const {id} = useParams()
      console.log(id);
      const loadParcel = async () => {
        const {data} = await axiosSecure(`/parcel/${id}`)
        setParcels(data)
        console.log(data);
      }
      useEffect(()=> {
        loadParcel()
      },[])
      const { number,
        parcelType,
        weight,
        receiverName,
        receiverPhone,
        address,
        deliveryDate,
        latitude,
        longitude,
        price,
        name,
        email} = parcels
        console.log(parcels);

    const handleWeight = e => {
      const weight = +e.target.value
      if(weight === 0){
        setPrices(0)
        toast.error("Weight can not be 0")
      }
      if(weight > 0 && weight < 2){
        setPrices(50)
      }
      if(weight >=2 && weight < 3){
        setPrices(100)
      }
      if(weight >= 3){
        setPrices(150)
      }
    }

    const handleUpdatePercel = async e => {
      e.preventDefault()
      const form = new FormData(e.target)
      const parcel = Object.fromEntries(form.entries())
      parcel.price = +parcel.price
      parcel.weight = +parcel.weight
      parcel.name = user?.displayName
      parcel.email = user?.email
      parcel.bookingDate = new Date()
      if(parcel.weight === 0){
        toast.error("Weight can not be 0")
        return
      }
      try{
        const {data} = await axiosSecure.post("/parcel", parcel)
      if(data.insertedId){
        toast.success("Your parcel booked successfully")
      } 
      }
      catch(err){
        toast.error( `something happened wrong, parcel not booked ${err}`)
      }
    }
  return (
    <section className="bg-gradient-to-r from-blue-100 to-teal-200 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-4xl font-semibold text-center text-blue-800 mb-4">Update Your Parcel Details</h2>
        <p className="text-center text-lg text-gray-600 mb-8">Modify your parcel information with ease. Please note that updates are only allowed for parcels with a "Pending" status.</p>

        <form onSubmit={handleUpdatePercel} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name (Auto-filled from logged-in user, read-only) */}
          <div className="col-span-1">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name=''
              value={user?.displayName}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Email (Auto-filled from logged-in user, read-only) */}
          <div className="col-span-1">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={user?.email}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Phone Number */}
          <div className="col-span-1">
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name='number'
              required
              defaultValue={number}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Parcel Type */}
          <div className="col-span-1">
            <label htmlFor="parcelType" className="block text-lg font-medium text-gray-700">Parcel Type</label>
            <input
              type="text"
              id="parcelType"
              name='parcelType'
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter parcel type"
            />
          </div>

          {/* Parcel Weight */}
          <div className="col-span-1">
            <label htmlFor="weight" className="block text-lg font-medium text-gray-700">Parcel Weight (kg)</label>
            <input
              type="number"
              id="weight"
              name='weight'
              min="0"
              onChange={handleWeight}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter weight in kg"
            />
          </div>

          {/* Receiver's Name */}
          <div className="col-span-1">
            <label htmlFor="receiverName" className="block text-lg font-medium text-gray-700">Receiver's Name</label>
            <input
              type="text"
              id="receiverName"
              name='receiverName'
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter receiver's name"
            />
          </div>

          {/* Receiver's Phone Number */}
          <div className="col-span-1">
            <label htmlFor="receiverPhone" className="block text-lg font-medium text-gray-700">Receiver's Phone Number</label>
            <input
              type="tel"
              id="receiverPhone"
              name='receiverPhone'
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter receiver's phone number"
            />
          </div>

          {/* Parcel Delivery Address */}
          <div className="col-span-1">
            <label htmlFor="address" className="block text-lg font-medium text-gray-700">Parcel Delivery Address</label>
            <input
              type="text"
              id="address"
              name='address'
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter delivery address"
            />
          </div>

          {/* Requested Delivery Date */}
          <div className="col-span-1">
            <label htmlFor="deliveryDate" className="block text-lg font-medium text-gray-700">Requested Delivery Date</label>
            <input
              type="date"
              id="deliveryDate"
              name='deliveryDate'
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Delivery Address Latitude */}
          <div className="col-span-1">
            <label htmlFor="latitude" className="block text-lg font-medium text-gray-700">Delivery Address Latitude</label>
            <input
              type="text"
              id="latitude"
              name='latitude'
              required
              placeholder="21.121365496"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Delivery Address Longitude */}
          <div className="col-span-1">
            <label htmlFor="longitude" className="block text-lg font-medium text-gray-700">Delivery Address Longitude</label>
            <input
              type="text"
              id="longitude"
              name='longitude'
              required
              placeholder="21.121365496"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Price (Auto calculated based on weight) */}
          <div className="col-span-1">
            <label htmlFor="price" className="block text-lg font-medium text-gray-700">Price (Tk)</label>
            <input
              type="text"
              id="price"
              name='price'
              value={prices}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Book Button */}
          <div className="col-span-1">
            <button
              type="submit"
              className="w-full p-4 bg-teal-500 text-white font-semibold rounded-md shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Update My Parcel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateParcel;
