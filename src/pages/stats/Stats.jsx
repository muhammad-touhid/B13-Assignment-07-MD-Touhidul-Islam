import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { TimelineContext } from "../../context/TimelineContext";

const Stats = () => {
  const { timelineData } = useContext(TimelineContext);
  const calls = timelineData.filter(
    (activity) => activity.contactType === "call",
  );
  const texts = timelineData.filter(
    (activity) => activity.contactType === "text",
  );
  const videos = timelineData.filter(
    (activity) => activity.contactType === "video",
  );
  const data = [
    {
      name: "Call",
      value: calls.length,
      fill: "#244D3F",
    },
    {
      name: "Text",
      value: texts.length,
      fill: "#37a163",
    },
    {
      name: "Video",
      value: videos.length,
      fill: "#7f37f5",
    },
  ];
  return (
    <div className="bg-[#F8FAFC]">
      <div className="max-w-[1110px] m-auto py-20 px-5 lg:px-0">
        <div>
          <h1 className="text-5xl font-bold heading-custom-color my-6">
            Friendship Analytics
          </h1>
        </div>
        <div className="bg-white rounded p-8">
          <h4 className="text-xl font-medium text-gray-900">
            By Interaction Type
          </h4>
          {timelineData.length === 0 ? (
            <p className="text-2xl text-center text-gray-500 py-10">
              No data found.
            </p>
          ) : (
            <div className="p-10">
              <PieChart
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  maxHeight: "80vh",
                  margin: "auto",
                  aspectRatio: 1,
                }}
                responsive
              >
                <Pie
                  data={data}
                  innerRadius="80%"
                  outerRadius="100%"
                  // Corner radius is the rounded edge of each pie slice
                  cornerRadius="50%"
                  fill=""
                  // padding angle is the gap between each pie slice
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={true}
                />
                <Legend
                  verticalAlign="bottom"
                  wrapperStyle={{
                    paddingTop: "20px",
                  }}
                />
                <Tooltip />
              </PieChart>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;
