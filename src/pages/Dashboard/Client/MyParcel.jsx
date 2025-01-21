import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import useMyParcels from "@/hooks/useMyParcels";
import toast from "react-hot-toast";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const MyParcel = () => {
  const { parcels = [], isLoading, refetch } = useMyParcels();
  const axiosSecure = useAxiosSecure()

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div>
          <p>Are you sure you want to delete this item?</p>
          <div className="flex gap-2 mt-2">
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={async() => {
                // Perform the delete action
                try{
                const {data} = await axiosSecure.delete(`/parcel/delete/${id}`)
                console.log(data)
                toast.success("Item deleted successfully")
                } catch(err){
                  toast.error("Failed to delete the item. Please try again later.")
                }
                finally{
                  toast.dismiss(t.id);
                  refetch()
                }
              }}
            >
              Yes
            </button>
            <button
              className="bg-gray-300 px-3 py-1 rounded"
              onClick={() => toast.dismiss(t.id)} // Dismiss the toast without action
            >
              No
            </button>
          </div>
        </div>
      ),
      { duration: Infinity } // Keep the toast visible until user interaction
    );
  };


  return (
    <div className="w-full md:w-11/12 mx-auto">
      <Table className="shadow-md">
        <TableHeader className="bg-gray-200">
          <TableRow>
            <TableHead>Parcel Type</TableHead>
            <TableHead>Requested Delivery Date</TableHead>
            <TableHead>Approx. Delivery Date</TableHead>
            <TableHead>Booking Date</TableHead>
            <TableHead>Delivery Men ID</TableHead>
            <TableHead>Booking Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center">
                <Progress value={50} />
              </TableCell>
            </TableRow>
          ) : parcels.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center">
                No parcels found.
              </TableCell>
            </TableRow>
          ) : (
            parcels.map((parcel) => (
              <TableRow key={parcel._id}>
                <TableCell className="font-medium">{parcel.parcelType}</TableCell>
                <TableCell>{parcel.deliveryDate}</TableCell>
                <TableCell>{parcel.approxDeliveryDate || "N/A"}</TableCell>
                <TableCell>{new Date(parcel.bookingDate).toLocaleDateString()}</TableCell>
                <TableCell>{parcel.deliveryManId || "N/A"}</TableCell>
                <TableCell>{parcel.status}</TableCell>
                <TableCell className="text-right flex flex-col md:flex-row justify-end gap-2">
                  {parcel.status === "pending" ? (
                    <Link
                      to={`/dashboard/update-parcel/${parcel._id}`}
                      className="px-2 py-1 border bg-blue-500 text-white"
                    >
                      Update
                    </Link>
                  ) : <button disabled
                  className="px-2 py-1 border bg-red-500 text-white"
                >
                  Update
                </button>
                  }
                  <button
                    onClick={() => handleDelete(parcel._id)}
                    className={`px-2 py-1 border ${
                      parcel.status !== "pending"
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-red-500 text-white"
                    }`}
                    disabled={parcel.status !== "pending"}
                  >
                    Cancel
                  </button>
                  {parcel.bookingStatus === "delivered" && (
                    <button
                      onClick={() => console.log(`Reviewing ${parcel._id}`)}
                      className="px-2 py-1 border bg-green-500 text-white"
                    >
                      Review
                    </button>
                  )}
                  {parcel.paymentStatus !== "paid" && (
                    <button
                      onClick={() => console.log(`Paying for ${parcel._id}`)}
                      className="px-2 py-1 border bg-yellow-500 text-white"
                    >
                      Pay
                    </button>
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyParcel;
