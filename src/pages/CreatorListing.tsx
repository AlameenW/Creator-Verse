import CreatorCard from "../components/CreatorCard";
import { supabase } from "../client.ts";
import { useEffect, useState } from "react";
import type { Creator } from "../types/creator.ts";

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
  return (
    <>
      <div className="creator-container">
        {creators &&
          creators.map((creator) => (
            <CreatorCard
              key={creator.id}
              id={creator.id}
              name={creator.name}
              description={creator.description}
              instagram={creator.instagram}
              twitter={creator.twitter}
              youtube={creator.youtube}
            />
          ))}
      </div>
    </>
  );
};

export default CreatorListing;
