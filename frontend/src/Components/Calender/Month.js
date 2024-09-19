import React from "react";
import Day from "./Day";


export default function Month({ month }) {
  return (
    <div className="col-12">
      <div className="row">
        {month.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <div className="large-calender-column border ">
                <Day day={day} key={idx} rowIdx={i} />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
