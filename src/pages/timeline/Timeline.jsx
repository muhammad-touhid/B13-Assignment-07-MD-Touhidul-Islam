import { useContext, useState } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import { PiPhoneCallBold, PiVideoCameraBold } from "react-icons/pi";
import { MdOutlineTextsms } from "react-icons/md";

const Timeline = () => {
  const { timelineData } = useContext(TimelineContext);
  const [filter, setFilter] = useState("all");
  const filteredTimeline =
    filter === "all"
      ? timelineData
      : timelineData.filter((activity) => activity.contactType === filter);

  return (
    <div className="bg-[#F8FAFC]">
      <div className="max-w-[1110px] m-auto py-20 px-5 lg:px-0">
        <div className="">
          <h2 className="text-5xl font-bold heading-custom-color">Timeline</h2>
          <select
            className="select text-gray-500 my-10"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>
        </div>

        {filteredTimeline.map((activity, index) => {
          return (
            <div
              key={index}
              className="activity-div bg-white rounded shadow p-4 mb-6"
            >
              <div className="flex items-center gap-3">
                <div>
                  {activity.contactType == "call" ? (
                    <PiPhoneCallBold size={30} />
                  ) : activity.contactType == "text" ? (
                    <MdOutlineTextsms size={30} />
                  ) : (
                    <PiVideoCameraBold size={30} />
                  )}
                </div>
                <div>
                  <span className="text-xl font-medium capitalize">
                    {activity.contactType}
                  </span>
                  <span className="text-lg text-gray-500">{` with ${activity.name}`}</span>
                  <p className="text-gray-500">
                    {new Date(activity.contactDate).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      },
                    )}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
