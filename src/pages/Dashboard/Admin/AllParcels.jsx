import useAuth from "@/hooks/useAuth";
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
import { Link } from "react-router-dom";
import { useState } from "react";
import ManageParcelModal from "@/components/Modal/ManageParcelModal";

const AllParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedParcel, setSelectedParcel] = useState(null);

  const handleManageClick = (parcelId) => {
    setSelectedParcel(parcelId);
    setIsModalOpen(true);
  };

  const handleAssign = async (parcelId, deliveryManId, deliveryDate) => {
    try {
      await fetch(`/api/parcels/${parcelId}/assign`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deliveryManId, deliveryDate }),
      });

      alert("Parcel assigned successfully!");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error assigning parcel:", error);
    }
  };

  const { data: parcels = [], isLoading } = useQuery({
    queryKey: ["My-Parcel", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/parcel`);
      return data;
    },
  });
  console.log(parcels, isLoading);
  return (
    <div className="w-full md:w-11/12 mx-auto">
      <Table className="shadow-md">
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
          ) : parcels.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center">
                No parcels found.
              </TableCell>
            </TableRow>
          ) : (
            parcels.map((parcel) => (
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

export default AllParcels;
