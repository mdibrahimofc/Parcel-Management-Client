import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const AllDeliveryMen = () => {
    const axiosSecure = useAxiosSecure()

    const { data: deliveryMan = [], isLoading } = useQuery({
        queryFn: async () => {
          const { data } = await axiosSecure.get("/delivery-men");
          return data;
        },
      });
  return (
    <div className="w-full md:w-11/12 mx-auto">
      <h1 className="text-xl md:text-2xl mb-4 font-bold">
        All Delivery Men ({deliveryMan.length})
      </h1>


      <Table className="shadow-md overflow-x-auto">
        <TableHeader className="bg-gray-200">
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Booking Date</TableHead>
            <TableHead>Requested Delivery Date</TableHead>
            <TableHead>Cost</TableHead>
            <TableHead>Status</TableHead>
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
          ) : deliveryMan.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center">
                No parcels found.
              </TableCell>
            </TableRow>
          ) : (
            deliveryMan.map((parcel) => (
              <TableRow key={parcel._id}>
                <TableCell className="font-medium">{parcel.name}</TableCell>
                <TableCell>{parcel.number}</TableCell>
                <TableCell>
                  {new Date(parcel.bookingDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{parcel.deliveryDate}</TableCell>
                <TableCell>{parcel.price || "N/A"}</TableCell>
                <TableCell>{parcel.status || "pending"}</TableCell>
                <TableCell>
                  <button
                    onClick={() => handleManageClick(parcel._id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Manage Parcel
                  </button>
                </TableCell>
                <ManageParcelModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  parcelId={selectedParcel}
                  onAssign={handleAssign}
                />
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllDeliveryMen;
