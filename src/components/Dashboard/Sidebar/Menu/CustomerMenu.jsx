import { IoIosListBox } from "react-icons/io"
import MenuItem from "./MenuItem"

const CustomerMenu = () => {


  return (
    <>
      <MenuItem
                  icon={IoIosListBox}
                  label='My Delivery List'
                  address='my-delivery-list'
                />
    </>
  )
}

export default CustomerMenu
