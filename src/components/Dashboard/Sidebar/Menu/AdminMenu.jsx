import MenuItem from "./MenuItem"
import { IoIosListBox } from "react-icons/io";

const AdminMenu = () => {
  return (
    <>
    <MenuItem
            icon={IoIosListBox}
            label='All Parcels'
            address='all-parcels'
          />
    <MenuItem
            icon={IoIosListBox}
            label='All Delivery Man'
            address='all-delivery-man'
          />
    </>
  )
}

export default AdminMenu
