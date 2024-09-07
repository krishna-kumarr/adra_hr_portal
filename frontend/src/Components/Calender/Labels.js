import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLabels } from "../../Storage/CalenderSlice/CalenderSlice";

export default function Labels() {

  const CalenderSlice = useSelector((state) => state.calender);
  const dispatch = useDispatch();

  const handleUncheckLabels = (index) => {
    const updateLabelChecked = CalenderSlice.labels.map((v, i) => {
      return index === i ? { ...v, checked: !v.checked } : v
    }) 
    dispatch(updateLabels(updateLabelChecked))
   
  }

  return (
    <React.Fragment> 
      {CalenderSlice.labels.map((labelVal, idx) => (
        <label key={idx} className="col-6 col-md text-center row ">
          <div className="col-2 col-md text-end">
            <input
              type="checkbox"
              checked={labelVal.checked}
              onChange={() => handleUncheckLabels(idx)}
              className={`form-checkbox h-5 w-5 text-${labelVal.label}-400 rounded focus:ring-0 cursor-pointer`}
            />
          </div>
          <div className="col-10 col-md text-start mb-4 md-md-0">
            <span className={`ms-2 text-gray-700 capitalize `}>{labelVal.label}</span>
          </div>
        </label>
      ))}
    </React.Fragment>
  );
}
