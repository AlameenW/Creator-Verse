import "bootstrap/dist/css/bootstrap.min.css";
import { MdEdit } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import CreatorAbout from "../pages/CreatorAbout";
interface CreatorCardProps {
  id: number;
  name: string;
  description: string;
  imgURL?: string;
  instagram: string;
  twitter: string;
  youtube: string;
}
const truncate = (text: string, maxLength: number) => {
  if (text.length > maxLength) return text.slice(0, maxLength) + "...";
  else return text;
};
const CreatorCard = ({
  id,
  name,
  description,
  twitter,
  instagram,
  youtube,
}: CreatorCardProps) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem", minHeight: "200px" }}>
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <div className="card-top">
            <h5 className="card-title">{name}</h5>
            <div className="top-icons">
              <Link to={`/about/${id}`}>
                <FaInfoCircle size={20} className="top-icon" />
              </Link>
              <Link to={`/edit/${id}`}>
                <MdEdit size={20} className="top-icon" />
              </Link>
            </div>
          </div>
          <p className="card-text">{truncate(description, 100)}</p>
          <div className="socials">
            <a href={instagram}>
              <FaInstagram size={25} className="social-icon" />
            </a>
            <a href={twitter}>
              <FaTwitter size={25} className="social-icon" />
            </a>
            <a href={youtube}>
              <FaYoutube size={25} className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
