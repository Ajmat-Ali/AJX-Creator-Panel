import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { GiWorld } from "react-icons/gi";
function PlatFormIcon({ title }) {
  //   console.log(title);

  const icons = {
    all: <GiWorld size={20} color="#00CC00" />,
    youtube: <FaYoutube size={20} color="#FF0000" />,
    facebook: <FaFacebook size={20} color="#1877F2" />,
    instagram: <FaInstagramSquare size={20} color="#E1306C" />,
    twitter: <FaTwitter size={20} color="#000000" />,
    linkedin: <FaLinkedin size={20} color="#0077B5" />,
  };
  if (icons[title]) {
    return icons[title];
  }
  return (
    <span className="bg-red-600 text-white rounded-2xl text-sm p-1">NA</span>
  );
}
export default PlatFormIcon;
