import { FaBox } from "react-icons/fa";
import { MdOutlineManageHistory } from 'react-icons/md'
import { BsFillGiftFill } from "react-icons/bs";
import MenuItem from './MenuItem'
const ClientMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaBox}
        label='Book Parcel'
        address='book-parcel'
      />
      <MenuItem icon={BsFillGiftFill} label='My Parcel' address='my-parcel' />
      <MenuItem
        icon={MdOutlineManageHistory}
        label='Manage Orders'
        address='manage-orders'
      />
    </>
  )
}

export default ClientMenu
