import { useEffect, useState } from "react";
import type { CreatorFormData } from "../types/creatorformdata";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";
const CreatorCreate = () => {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState<CreatorFormData>({
    name: "",
    description: "",
    imageURL: "",
    twitter: "",
    youtube: "",
    instagram: "",
  });

  const handleSubmit = async () => {
    try {
      const { error } = await supabase.from("Creators").insert(formInput);
      if (error) console.log(error);
      navigate('/')

    } catch (e) {
      console.log("Error posting data");
    }
  };
  return (
    <div className="create-container">
      <h2>Add a new Creator</h2>
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={formInput.name}
          onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
        />
        <label htmlFor="desciption">Description:</label>
        <input
          type="text"
          id="desciption"
          value={formInput.description}
          onChange={(e) =>
            setFormInput({ ...formInput, description: e.target.value })
          }
        />
        <label htmlFor="imageURL">Image-URL:</label>
        <input
          type="text"
          id="imageURL"
          value={formInput.imageURL}
          onChange={(e) =>
            setFormInput({ ...formInput, imageURL: e.target.value })
          }
        />
        <p>SOCIAL MEDIA LINKS</p>
        <label htmlFor="twitter">Twitter:</label>
        <input
          type="text"
          id="twitter"
          value={formInput.twitter}
          onChange={(e) =>
            setFormInput({ ...formInput, twitter: e.target.value })
          }
        />
        <label htmlFor="instagram">Instagram:</label>
        <input
          type="text"
          id="instagram"
          value={formInput.instagram}
          onChange={(e) =>
            setFormInput({ ...formInput, instagram: e.target.value })
          }
        />
        <label htmlFor="youtube">Youtube:</label>
        <input
          type="text"
          id="youtube"
          value={formInput.youtube}
          onChange={(e) =>
            setFormInput({ ...formInput, youtube: e.target.value })
          }
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatorCreate;
