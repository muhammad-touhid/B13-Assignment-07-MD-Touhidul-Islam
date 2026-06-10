import { Link } from "react-router";
import { BarLoader } from "react-spinners";
import useFriendsData from "../../hooks/useFriendsData";

const FriendData = () => {
  const { friends, loading } = useFriendsData();

  return (
    <div className="bg-[#F8FAFC]">
      <div className="max-w-[1110px] m-auto py-10  px-5 lg:px-0">
        <h3 className="text-2xl heading-custom-color font-semibold mb-5">
          Your Friends
        </h3>
        {loading ? (
          <div className="flex justify-center items-center mt-20">
            <BarLoader color="#244D3F" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {friends.map((friend, id) => {
              return (
                <Link
                  key={id}
                  className="text-center shadow-custom rounded-lg py-6 bg-white"
                >
                  <img
                    src={friend.picture}
                    alt={friend.name}
                    className="m-auto rounded-full mb-2 w-[40%] h-auto"
                  />
                  <h3 className="text-xl font-semibold mb-2">{friend.name}</h3>
                  <p className="text-gray-500 mb-2">
                    {friend.days_since_contact}d ago
                  </p>
                  {friend.tags.map((tag, index) => {
                    return (
                      <div
                        key={index}
                        className="badge badge-soft badge-success  mx-2 my-3 uppercase"
                      >
                        {tag}
                      </div>
                    );
                  })}
                  <div>
                    <div
                      className={`badge rounded-full capitalize ${friend.status === "on-track" ? "badge-custom" : friend.status === "almost due" ? "badge-warning" : "badge-error"}`}
                    >
                      {friend.status}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendData;
