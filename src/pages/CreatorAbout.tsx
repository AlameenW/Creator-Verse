import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import type { Creator } from "../types/creator.ts";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const extractUsername = (url: string) => {
  if (url.includes("instagram")) url = url.substring(0, url.length - 2);
  let output = "";
  let index = url.length - 1;
  while (url[index] != "/") {
    output = url[index] + output;
    index--;
  }
  return output;
};
const CreatorAbout = () => {
  const navigate = useNavigate();
  const [creator, setCreator] = useState<Creator | null>(null);
  const { id } = useParams();
  useEffect(() => {
    const getCreator = async () => {
      const { data, error } = await supabase
        .from("Creators")
        .select("*")
        .eq("id", parseInt(id!))
        .single();
      if (error) console.log({ error });
      else {
        setCreator(data);
      }
    };
    getCreator();
  }, [id]);
  const onDelete = async () => {
    try {
      const response = await supabase.from("Creators").delete().eq("id", id);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {creator && (
        <div className="container about-container">
          <div className="about-content">
            <div className="img-container">
              <img src="https://placehold.co/250x300" />
            </div>
            <div className="creator-info">
              <h2>{creator?.name.toUpperCase()}</h2>
              <p>{creator?.description}</p>
              <div className="creator-socials">
                <div>
                  <FaInstagram size={25} />
                  <a href={creator?.instagram}>{`@${extractUsername(
                    creator.instagram
                  )}`}</a>
                </div>
                <div>
                  <FaTwitter size={25} />
                  <a href={creator?.twitter}>{`@${extractUsername(
                    creator?.twitter
                  )}`}</a>
                </div>
                <div>
                  <FaYoutube size={25} />
                  <a href={creator?.youtube}>{`@${extractUsername(
                    creator?.youtube
                  )}`}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="cta">
            <button
              className="btn btn-primary "
              onClick={() => {
                navigate(`/edit/${id}`);
              }}
            >
              Edit
            </button>
            <button className="btn btn-danger " onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatorAbout;
