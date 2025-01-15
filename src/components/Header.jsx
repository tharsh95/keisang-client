import { ListFilter } from "lucide-react";
import React from "react";
import DrawerDemo from "../components/Drawer";


const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl">Inventory</h1>
        </div>
        <div className="flex gap-4 items-center">
          <p>Select Dealer</p>
          <input
            type="text"
            value="Search Dealer"
            disabled
            className="border bg-white border-[#ff9a26] rounded-lg p-2"
          />
          <div className="flex items-center bg-white rounded-lg p-2 hover:border hover:border-[#ff9a26]">
            <ListFilter color="#ff9a26" className="hover:cursor- mr-3 " />
            <DrawerDemo/>
          </div>
        </div>
      </div>
      <hr className="border-gray-400 border-t my-4" />
    </>
  );
};

export default Header;
