import { useParams } from "react-router";
import useFriendsData from "../../hooks/useFriendsData";
import { BarLoader } from "react-spinners";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import {
  PiArchiveBold,
  PiPhoneCallBold,
  PiVideoCameraBold,
} from "react-icons/pi";
import { MdOutlineTextsms } from "react-icons/md";
import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import { toast } from "react-toastify";

const FriendDetails = () => {
  const { timelineData, setTimelineData } = useContext(TimelineContext);
  const { friends, loading } = useFriendsData();
  const { id } = useParams();

  const expectedFriend = friends.find((friend) => friend.id == id);

  const handleTimelineData = (type) => {
    setTimelineData([
      ...timelineData,
      {
        ...expectedFriend,
        contactType: type,
        contactDate: new Date().toISOString(),
      },
    ]);

    toast.success(`${type} with ${expectedFriend.name}`, {
      position: "top-center",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <BarLoader color="#244D3F" />
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC]">
      <div className="max-w-[1110px] m-auto py-20 border-b border-[#E9E9E9] px-5 xl:px-0 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[30%]">
          <div className="name-card bg-white shadow text-center p-6 rounded-lg mb-4">
            <img
              src={expectedFriend.picture}
              alt={expectedFriend.name}
              className="m-auto rounded-full mb-2 w-[40%] h-auto"
            />
            <h4 className="text-xl font-semibold">{expectedFriend.name}</h4>
            <div>
              <div
                className={`badge rounded-full capitalize mt-3 ${expectedFriend.status === "on-track" ? "badge-custom" : expectedFriend.status === "almost due" ? "badge-warning" : "badge-error"}`}
              >
                {expectedFriend.status}
              </div>
            </div>
            {expectedFriend.tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className="badge badge-soft badge-success  mx-2 my-3 uppercase"
                >
                  {tag}
                </div>
              );
            })}
            <p className="font-medium text-gray-500 italic">
              "{expectedFriend.bio}"
            </p>
            <p className="text-gray-500">Email: {expectedFriend.email}</p>
          </div>
          <div className="action-btn space-y-3">
            <div className="flex justify-center items-center gap-2 font-medium bg-white py-3 rounded-lg shadow cursor-pointer">
              <RiNotificationSnoozeLine />
              <span>Snooze 2 weeks</span>
            </div>
            <div className="flex justify-center items-center gap-2 font-medium bg-white py-3 rounded-lg shadow cursor-pointer">
              <PiArchiveBold />
              <span>Archive</span>
            </div>
            <div className="flex justify-center items-center gap-2 font-medium bg-white py-3 rounded-lg shadow cursor-pointer text-red-400">
              <RiDeleteBinLine />
              <span>Delete</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[70%] space-y-6">
          <div className="day-goal-next flex flex-col md:flex-row gap-5">
            <div className="bg-white rounded-lg py-8 flex-1 text-center shadow">
              <h4 className="text-3xl font-semibold">
                {expectedFriend.days_since_contact}
              </h4>
              <p className="text-gray-500">Days Since Contact</p>
            </div>
            <div className="bg-white rounded-lg py-8 flex-1 text-center shadow">
              <h4 className="text-3xl font-semibold">{expectedFriend.goal}</h4>
              <p className="text-gray-500">Goal (Days)</p>
            </div>
            <div className="bg-white rounded-lg py-8 flex-1 text-center shadow">
              <h4 className="text-3xl font-semibold">
                {expectedFriend.next_due_date}
              </h4>
              <p className="text-gray-500">Next Due</p>
            </div>
          </div>
          <div className="goal bg-white rounded-lg shadow px-6 py-7 relative">
            <button className="btn absolute top-6 right-6 px-5">Edit</button>
            <p className="text-xl font-medium">Relationship Goal</p>
            <p className="text-lg text-gray-500">
              Connect every{" "}
              <span className="font-bold text-black">30 days</span>
            </p>
          </div>
          <div className="check-in bg-white rounded-lg shadow p-6">
            <p className="text-xl font-medium">Quick Check-In</p>
            <div className="flex gap-4 mt-4">
              <div
                className="bg-[#F8FAFC] rounded-lg shadow flex-1 py-5 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => handleTimelineData("call")}
              >
                <PiPhoneCallBold size={30} />
                <p className="text-lg">Call</p>
              </div>
              <div
                className="bg-[#F8FAFC] rounded-lg shadow flex-1 py-5 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => handleTimelineData("text")}
              >
                <MdOutlineTextsms size={30} />
                <p className="text-lg">Text</p>
              </div>
              <div
                className="bg-[#F8FAFC] rounded-lg shadow flex-1 py-5 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => handleTimelineData("video")}
              >
                <PiVideoCameraBold size={30} />
                <p className="text-lg">Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
