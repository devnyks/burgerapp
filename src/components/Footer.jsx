import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="h-32 bg-red-600">
        <div className="flex flex-col items-center justify-center h-full p-3">
          <div className="flex justify-center items-center gap-9 h-full">
            <ImFacebook2 className="text-4xl text-white" />
            <FaInstagram className="text-4xl text-white" />
            <FaXTwitter className="text-4xl text-white" />
          </div>
          <p className="text-white text-center text-xs">
            Tüm hakları saklıdır | BurgerYiyelim
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;