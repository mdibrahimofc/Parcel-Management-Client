const AllParcels = () => {
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
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllParcels;
