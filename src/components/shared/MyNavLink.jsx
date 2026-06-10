import { NavLink } from "react-router";
const MyNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-gray-600 mr-2 ${isActive ? "bg-[#244D3F] text-white" : ""} `
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
