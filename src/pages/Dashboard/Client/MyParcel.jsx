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

const MyParcel = () => {
  const { parcels, isLoading } = useMyParcels()

  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      // Update the booking status to 'canceled' (implement the cancel logic here)
      console.log(`Booking ${id} canceled.`);
    }
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
              <TableCell colSpan={7}>
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
                <TableCell>{parcel.approximateDeliveryDate}</TableCell>
                <TableCell>{new Date(parcel.bookingDate).toLocaleDateString()}</TableCell>
                <TableCell>{parcel.deliveryMenId || "N/A"}</TableCell>
                <TableCell>{parcel.bookingStatus}</TableCell>
                <TableCell className="text-right flex flex-col md:flex-row justify-end gap-2">
                  <button>
                    <Link to={`/dashboard/update-parcel/${parcel._id}`}>
                    Update
                    </Link>
                  </button>
                  <button
                    onClick={() => handleCancel(parcel._id)}
                    className={`px-2 py-1 border ${
                      parcel.bookingStatus !== "pending"
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-red-500 text-white"
                    }`}
                    disabled={parcel.bookingStatus !== "pending"}
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
