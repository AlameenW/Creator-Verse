import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../client";
import type { Creator } from "../types/creator";
const CreatorUpdate = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState<Creator>({
  id: 0,
  name: '',
  created_at: new Date(),
  description: '',
  imageURL: '',
  twitter: '',
  youtube: '',
  instagram: '',
  });
  const onSubmit = async() => {
    try{
      const {error} = await supabase.from('Creators').update(formInput).eq('id',formInput.id)
      if (error) {
        console.log(`Error updating data`)
      }
      navigate('/')
    } 
    catch(e){
      console.log('Error submitting data');
    }
  }
  useEffect(() => {
    const getCreator = async () => {
      try {
        const { data, error } = await supabase
          .from("Creators")
          .select()
          .eq("id", id);
        if (error) {
          console.log(error.message);
        }
        else{
          const creator = data[0];
          setFormInput({
            id: creator.id,
            name: creator.name,
            created_at: creator.created_at,
            description: creator.description,
            imageURL: creator.imageURL,
            twitter: creator.twitter,
            youtube: creator.youtube,
            instagram: creator.instagram,
          });
        }
      } catch (e) {
        console.log("Error fetching data");
      }
      finally{
        setLoading(false)
      }
    };
    getCreator();
  }, [id]);

  return (
    <>
      <div className="update-container">
        <h2>Update page</h2>
        {loading? <></> : <form
          className="form-container"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formInput.name}
            onChange={(e) =>
              setFormInput({ ...formInput, name: e.target.value })
            }
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
        </form>}
      </div>
    </>
  );
};

export default CreatorUpdate;
