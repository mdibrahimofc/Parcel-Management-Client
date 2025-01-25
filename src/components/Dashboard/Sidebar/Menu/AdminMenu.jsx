import MenuItem from "./MenuItem"
import { IoIosListBox } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
import { FaUser } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <>
    <MenuItem
            icon={IoIosListBox}
            label='All Parcels'
            address='all-parcels'
          />

    <MenuItem
            icon={FcBusinessman}
            label='All Delivery Man'
            address='all-delivery-man'
          />

    <MenuItem
            icon={FaUser}
            label='All Users'
            address='all-users'
          />
    </>
  )
}

export default AdminMenu
