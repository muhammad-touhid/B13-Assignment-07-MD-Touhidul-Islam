import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <div className="max-w-[1110px] m-auto pt-20 border-b border-[#E9E9E9] px-5 lg:px-0">
        <div className="text-center space-y-8">
          <h2 className="text-5xl heading-custom-color font-bold">
            Friends to keep close in your life
          </h2>
          <p className="text-gray-500">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the
            <br /> relationships that matter most.
          </p>
          <button className="btn btn-custom">
            <FaPlus />
            Add a Friend
          </button>
        </div>
        <div className="summary-cards grid grid-cols-2 lg:grid-cols-4 gap-6 my-8">
          <div className="bg-white shadow-custom rounded py-8 text-center">
            <h3 className="text-3xl heading-custom-color">10</h3>
            <p className="text-gray-500 text-lg">Total Friends</p>
          </div>
          <div className="bg-white shadow-custom rounded py-8 text-center">
            <h3 className="text-3xl heading-custom-color">3</h3>
            <p className="text-gray-500 text-lg">On Track</p>
          </div>
          <div className="bg-white shadow-custom rounded py-8 text-center">
            <h3 className="text-3xl heading-custom-color">6</h3>
            <p className="text-gray-500 text-lg">Need Attention</p>
          </div>
          <div className="bg-white shadow-custom rounded py-8 text-center">
            <h3 className="text-3xl heading-custom-color">12</h3>
            <p className="text-gray-500 text-lg">Interactions This Month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
