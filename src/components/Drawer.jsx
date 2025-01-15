"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer";
import { Button } from "../components/ui/button";
import { setBrandQuery, setTableData } from "../redux/slices/fetch/index";
import useFetch from "../hooks/useFetchData";

function DrawerDemo() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const dispatch = useDispatch();
  const brandQuery = useSelector((state) => state.table.brandQuery);
  const handleBrandChange = (brand) => {
    setSelectedBrand((prev) => (prev === brand ? "" : brand));
  };

  const handleApplyFilters = () => {
    const brandQuery = selectedBrand ? `brand=${selectedBrand}` : "";
    dispatch(setBrandQuery(brandQuery));
   
  };


  const { data, error, loading } = useFetch(
    `http://localhost:8000/api/history-log?${brandQuery})}`
  );

  useEffect(() => {
    if (data) {
      dispatch(setTableData(data));
    }
  }, [data, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">FILTER DATA BY</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Filter Options</DrawerTitle>
          </DrawerHeader>

          {/* First Section - Car Brands */}
          <div className="p-4 pb-0">
            <h3 className="text-xl font-semibold">Car Brands</h3>
            <div className="mt-2 space-y-2">
              {["Ford", "Cadillac", "Jeep", "GMC"].map((brand) => (
                <label key={brand} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedBrand === brand} // Only one can be checked
                    onChange={() => handleBrandChange(brand)}
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-xl font-semibold">Duration</h3>
            <div className="mt-2 space-y-2">
              {[
                "Last month",
                "This month",
                "Last 3 months",
                "Last 6 months",
                "This year",
                "Last year",
              ].map((duration) => (
                <label key={duration} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                  
                  />
                  {duration}
                </label>
              ))}
            </div>
          </div>

          <div className="p-4 flex justify-between">
            <Button variant="outline" onClick={() => setSelectedBrand("")}>
              Reset
            </Button>
            <DrawerClose asChild>
              <Button className="bg-[#ff9a26]" onClick={handleApplyFilters}>
                Apply Filters
              </Button>
            </DrawerClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerDemo;
