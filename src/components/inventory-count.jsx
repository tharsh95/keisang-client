// components/Count.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarGraph } from './bar-chart';
import useFetch from '../hooks/useFetchData';
import { setCondition } from '../redux/slices/count_condition';

const Count = () => {
  // Use Redux state for condition
  const dispatch = useDispatch();
  const condition = useSelector((state) => state.countCondition.condition);
  const { data, loading, error, refetch } = useFetch(
    "http://localhost:8000/api/inventory-count",
    { condition }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Prepare chart data from API response
  const chartData = data?.map(item => ({
    date: item.date, 
    desktop: item.count,
  }));

  const chartConfig = {
    desktop: {
      label: "count",
      color: "#ff9a26",
    },
  };

  // Function to handle button click and set condition
  const handleButtonClick = (conditionType) => {
    dispatch(setCondition(conditionType));
    refetch({ condition: conditionType });
  };

  // Button styles based on selected condition
  const buttonStyle = (buttonCondition) => {
    return condition === buttonCondition
      ? 'text-white bg-[#ff9a26] border-[#ff9a26]'
      : 'text-black bg-white border-[#ff9a26]';
  };
  
  return (
    <>
      <div className='mt-4'>
        <div className='flex gap-4 items-center'>
          <h2 className='text-xl font-semibold'>Inventory Count</h2>
          <button
            className={`p-3 border ${buttonStyle("new")}`}
            onClick={() => handleButtonClick("new")}
          >
            NEW
          </button>
          <button
            className={`p-3 border ${buttonStyle("used")}`}
            onClick={() => handleButtonClick("used")}
          >
            USED
          </button>
          <button
            className={`p-3 border ${buttonStyle("cpo")}`}
            onClick={() => handleButtonClick("cpo")}
          >
            CPO
          </button>
        </div>
        <div className='mt-4'>
          <BarGraph data={chartData} config={chartConfig} title={"Count"} />
        </div>
      </div>
    </>
  );
};

export default Count;
