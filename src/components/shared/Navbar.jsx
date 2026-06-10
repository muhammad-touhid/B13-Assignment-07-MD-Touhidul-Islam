import { GoHome } from "react-icons/go";
import logoImg from "../../assets/images/logo.png";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { Link } from "react-router";
import MyNavLink from "./MyNavLink";
const Navbar = () => {
  return (
    <div>
      <div className=" bg-base-100 shadow-sm">
        <div className="navbar max-w-350 mx-auto">
          <div className="flex-1">
            <Link to={"/"} className="btn btn-ghost text-xl">
              <img src={logoImg} alt="logo" />
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <MyNavLink to={"/"}>
                  <GoHome />
                  Home
                </MyNavLink>
              </li>
              <li>
                <MyNavLink to={"/timeline"}>
                  <RiTimeLine />
                  Timeline
                </MyNavLink>
              </li>
              <li>
                <MyNavLink to={"/stats"}>
                  <ImStatsDots />
                  Stats
                </MyNavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
