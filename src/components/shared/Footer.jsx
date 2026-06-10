import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import footerLogo from "../../assets/images/logo-xl.png";
import { Link } from "react-router";
const Footer = () => {
  return (
    <div className="bg-[#244D3F]">
      <div className="max-w-[1110px] m-auto pt-20 border-b border-[#E9E9E9] px-5 lg:px-0">
        <div className="text-center space-y-4 mb-4">
          <div>
            <img src={footerLogo} alt="Footer Logo" className="m-auto" />
          </div>
          <p className="text-gray-300">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        <div className="text-center m-auto space-y-3">
          <h4 className="text-white text-xl font-medium">Social Links</h4>
          <div className="flex justify-center gap-2">
            <div className="bg-white p-2 rounded-full">
              <FaSquareInstagram />
            </div>
            <div className="bg-white p-2 rounded-full">
              <FaSquareFacebook />
            </div>
            <div className="bg-white p-2 rounded-full">
              <FaXTwitter />
            </div>
          </div>
        </div>
        <div className="footer-bottom flex justify-between py-5 border-t border-gray-600 mt-10">
          <p className="text-gray-400">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          <div className="text-gray-400 flex gap-8">
            <Link>Privacy Policy</Link>
            <Link>Terms of Service</Link>
            <Link>Cookies</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
