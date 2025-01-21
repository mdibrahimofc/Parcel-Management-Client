import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import useMyParcels from "@/hooks/useMyParcels";
import toast from "react-hot-toast";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const MyParcel = () => {
  const { parcels = [], isLoading, refetch } = useMyParcels();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div>
          <p>Are you sure you want to delete this item?</p>
          <div className="flex gap-2 mt-2">
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              onClick={async () => {
                try {
                  const { data } = await axiosSecure.delete(
                    `/parcel/delete/${id}`
                  );
                  toast.success("Item deleted successfully");
                } catch (err) {
                  toast.error("Failed to delete the item. Please try again.");
                } finally {
                  toast.dismiss(t.id);
                  refetch();
                }
              }}
            >
              Yes
            </button>
            <button
              className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400 transition"
              onClick={() => toast.dismiss(t.id)}
            >
              No
            </button>
          </div>
        </div>
      ),
      { duration: Infinity }
    );
  };

  return (
    <div className="w-full md:w-11/12 mx-auto">
      <header className="text-center my-6">
        <h1 className="text-3xl font-bold text-amber-400">My Parcels</h1>
        <p className="text-cyan-600 font-semibold">
          Manage and track your parcels efficiently.
        </p>
      </header>
      <div className="flex sticky top-0 justify-between items-center p-4 bg-white shadow-md rounded-md mb-4">
        <p className="font-semibold px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-lg">Filter by Status</p>
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Pending</SelectItem>
              <SelectItem value="dark">On the way</SelectItem>
              <SelectItem value="system">Delivered</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Table className="shadow-lg rounded-lg overflow-hidden">
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
                <Progress value={50} className="w-1/2 mx-auto my-4" />
                <p>Loading parcels...</p>
              </TableCell>
            </TableRow>
          ) : parcels.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center">
                <p className="text-gray-500">No parcels found.</p>
              </TableCell>
            </TableRow>
          ) : (
            parcels.map((parcel) => (
              <TableRow key={parcel._id} className="hover:bg-gray-50">
                <TableCell className="font-medium">
                  {parcel.parcelType}
                </TableCell>
                <TableCell>{parcel.deliveryDate}</TableCell>
                <TableCell>{parcel.approxDeliveryDate || "N/A"}</TableCell>
                <TableCell>
                  {new Date(parcel.bookingDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{parcel.deliveryManId || "N/A"}</TableCell>
                <TableCell>{parcel.status}</TableCell>
                <TableCell className="text-right flex flex-col md:flex-row justify-end gap-2">
                  {parcel.status === "pending" ? (
                    <Link
                      to={`/dashboard/update-parcel/${parcel._id}`}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                      Update
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="px-3 py-1 bg-gray-300 text-gray-500 rounded cursor-not-allowed"
                    >
                      Update
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(parcel._id)}
                    className={`px-3 py-1 rounded ${
                      parcel.status !== "pending"
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-red-500 text-white hover:bg-red-600 transition"
                    }`}
                    disabled={parcel.status !== "pending"}
                  >
                    Cancel
                  </button>
                  {parcel.bookingStatus === "delivered" && (
                    <button
                      onClick={() => console.log(`Reviewing ${parcel._id}`)}
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    >
                      Review
                    </button>
                  )}
                  {parcel.paymentStatus !== "paid" && (
                    <button
                      onClick={() => console.log(`Paying for ${parcel._id}`)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
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
