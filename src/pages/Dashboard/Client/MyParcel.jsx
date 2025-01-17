import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Progress } from "@/components/ui/progress";
  import useAuth from "@/hooks/useAuth";
  import useAxiosSecure from "@/hooks/useAxiosSecure";
  import { useQuery } from "@tanstack/react-query";
  
  const MyParcel = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
  
    const { data: parcels = [], isLoading } = useQuery({
      queryKey: ["My-Parcel", user?.email],
      queryFn: async () => {
        const { data } = await axiosSecure(`/parcel/${user?.email}`);
        return data;
      },
    });
  
    return (
      <div className="w-full md:w-11/12 mx-auto">
        <Table className="shadow-md">
          <TableHeader className="bg-gray-200">
            <TableRow>
              <TableHead>Parcel Type</TableHead>
              <TableHead>Weight (kg)</TableHead>
              <TableHead>Receiver Name</TableHead>
              <TableHead>Receiver Phone</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Delivery Date</TableHead>
              <TableHead>Price (BDT)</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={8}>
                  <Progress value={50} />
                </TableCell>
              </TableRow>
            ) : parcels.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center">
                  No parcels found.
                </TableCell>
              </TableRow>
            ) : (
              parcels.map((parcel) => (
                <TableRow key={parcel._id}>
                  <TableCell className="font-medium">{parcel.parcelType}</TableCell>
                  <TableCell>{parcel.weight}</TableCell>
                  <TableCell>{parcel.receiverName}</TableCell>
                  <TableCell>{parcel.receiverPhone}</TableCell>
                  <TableCell>{parcel.address}</TableCell>
                  <TableCell>{parcel.deliveryDate}</TableCell>
                  <TableCell>{parcel.price}</TableCell>
                  <TableCell className="text-right">
                    <button className="text-blue-500 px-2 py-1 border mr-2">Update</button>
                    <button className="text-red-500 mr-2">Cancel</button>
                    <button className="text-green-500">Review</button>
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
  