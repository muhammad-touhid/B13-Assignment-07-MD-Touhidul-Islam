import { useState } from "react";
import { TimelineContext } from "./TimelineContext";

const TimelineContextProvider = ({ children }) => {
  const [timelineData, setTimelineData] = useState([]);
  const data = {
    timelineData,
    setTimelineData,
  };
  return (
    <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
  );
};

export default TimelineContextProvider;
