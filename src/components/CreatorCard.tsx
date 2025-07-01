import "bootstrap/dist/css/bootstrap.min.css";
import { MdEdit } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
interface CreatorCardProps {
  name: string;
  description: string;
  imgURL?: string;
}

const CreatorCard = () => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <div className="card-top">
            <h5 className="card-title">Card title</h5>
            <div className="top-icons">
              <FaInfoCircle size={20} className="top-icon" />
              <MdEdit size={20} className="top-icon" />
            </div>
          </div>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <div className="socials">
            <a href="">
              <FaInstagram size={25} className="social-icon" />
            </a>
            <a href="">
              <FaTwitter size={25} className="social-icon" />
            </a>
            <a href="">
              <FaYoutube size={25} className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
