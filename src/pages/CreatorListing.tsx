import CreatorCard from "../components/CreatorCard";
import { supabase } from "../client.ts";
import { useEffect, useState } from "react";
interface Creator {
  id: number;
  name: string;
  created_at: Date;
  description: string;
  imageURL: string;
  twitter: string;
  youtube: string;
  instagram: string;
}
const CreatorListing = () => {
  const [creators, setCreators] = useState<Creator[]>([]);

  useEffect(() => {
    const getCreators = async () => {
      const { data, error } = await supabase.from("Creators").select();
      if (error) console.log(error.message);
      else {
        setCreators(data);
      }
    };

    getCreators();
  }, []);
  useEffect(() => {
    console.log(creators);
  }, [creators]);
  return (
    <>
      <div className="creator-container">
        {creators &&
          creators.map((creator) => (
            <CreatorCard
              name={creator.name}
              description={creator.description}
            />
          ))}
      </div>
    </>
  );
};

export default CreatorListing;
