import { useContext, useState } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import callImg from "../../assets/images/call.png";
import textImg from "../../assets/images/text.png";
import videoImg from "../../assets/images/video.png";

const Timeline = () => {
  const { timelineData } = useContext(TimelineContext);
  const [filter, setFilter] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    setSearchTerm(searchInput);
  };
  const [sortOrder, setSortOrder] = useState("newest");

  const displayedTimeline = [...timelineData]

    .filter((activity) =>
      filter === "all" ? true : activity.contactType === filter,
    )

    .filter(
      (activity) =>
        activity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.contactType.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    .sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.contactDate) - new Date(a.contactDate);
      } else {
        return new Date(a.contactDate) - new Date(b.contactDate);
      }
    });
  return (
    <div className="bg-[#F8FAFC]">
      <div className="max-w-[1110px] m-auto py-20 px-5 lg:px-0">
        <div className="">
          <h2 className="text-5xl font-bold heading-custom-color">Timeline</h2>
          <div className="flex flex-col md:flex-row justify-between items-center mb-5">
            <select
              className="select text-gray-500 my-10"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">Filter Timeline</option>
              <option value="call">Call</option>
              <option value="text">Text</option>
              <option value="video">Video</option>
            </select>
            <div className="flex flex-col md:flex-row md:gap-3 items-center">
              <div>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="select text-gray-500 md:my-10"
                >
                  <option value="newest">Newest to Oldest</option>
                  <option value="oldest">Oldest to Newest</option>
                </select>
              </div>
              <div>
                {" "}
                <div class="flex flex-row gap-2 mt-4 md:mt-0">
                  <div>
                    <label class="input w-full">
                      <svg
                        class="h-[1.5em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <g
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-width="2.5"
                          fill="none"
                          stroke="currentColor"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.3-4.3"></path>
                        </g>
                      </svg>
                      <input
                        type="search"
                        value={searchInput}
                        class="text-md"
                        placeholder="Search Activity"
                        onChange={(e) => setSearchInput(e.target.value)}
                      />
                    </label>
                  </div>
                  <button
                    onClick={handleSearch}
                    class="btn bg-[#244D3F] join-item text-white"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {displayedTimeline.length === 0 ? (
          <p className="text-2xl text-center text-gray-500 py-10">
            No data found.
          </p>
        ) : (
          displayedTimeline.map((activity, index) => {
            return (
              <div
                key={index}
                className="activity-div bg-white rounded shadow p-4 mb-6"
              >
                <div className="flex items-center gap-3">
                  <div>
                    {activity.contactType == "call" ? (
                      <img src={callImg} alt="call" />
                    ) : activity.contactType == "text" ? (
                      <img src={textImg} alt="call" />
                    ) : (
                      <img src={videoImg} alt="call" />
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
          })
        )}
      </div>
    </div>
  );
};

export default Timeline;
