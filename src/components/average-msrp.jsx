import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BarGraph } from './bar-chart';
import useFetch from '../hooks/useFetchData';
import { setCondition } from '../redux/slices/msrp_condition';

const Average = () => {
  const condition = useSelector((state) => state.msrpCondition.condition);
  const dispatch = useDispatch();

  const { data, loading, error, refetch } = useFetch(
    `${import.meta.env.VITE_API_URL}/api/average-msrp`,
    { condition }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!data || data.length === 0) {
    return <p>No data available for the selected condition.</p>;
  }
  const chartData = data.map((item) => ({
    date: item.date,
    desktop: item.avgMSRP || 0
  }));

  const chartConfig = {
    desktop: {
      label: "Average MSRP",
      color: "#ff9a26",
    },
  };
  const handleButtonClick = (conditionType) => {
    dispatch(setCondition(conditionType));
    refetch({condition:conditionType})
  };

  const buttonStyle = (buttonCondition) => {
    return condition === buttonCondition
      ? 'text-white bg-[#ff9a26] border-[#ff9a26]'
      : 'text-black bg-white border-[#ff9a26]';
  };

  return (
    <>
      <div className='mt-4'>
        <div className='flex gap-4 items-center'>
          <h2 className='text-xl font-semibold'>Average MSRP</h2>
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
          <BarGraph data={chartData} config={chartConfig} title="Average MSRP" />
        </div>
      </div>
    </>
  );
};

export default Average;
