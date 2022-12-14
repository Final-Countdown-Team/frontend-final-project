import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { containerVariantY } from "../animations/containerVariants";
import Heading from "../heading/Heading";

import "./_Home.scss";
import Map from "../map/Map";
import ReuseButton from "../buttons/Reusable_BB";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  // Fetch venues and artists locations for map on /home
  const [fetchedLocations, setFetchedLocations] = useState([]);

  const { ref, inView } = useInView();

  console.log(inView);

  useEffect(() => {
    const fetchData = async () => {
      const query = "fields=name,location,type&page=1&limit=10";
      const artistsRes = await fetch(`/artists?${query}`);
      const artistsData = await artistsRes.json();

      const venuesRes = await fetch(`/venues?${query}`);
      const venuesData = await venuesRes.json();
      console.log(artistsData);

      const joinedData = artistsData.data.concat(venuesData.data);
      console.log(joinedData);

      setFetchedLocations(joinedData);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <motion.div
      // variants={containerVariantY}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="margin-container home-container"
    >
      <Heading />
      <div className="about-text">
        <p>
          VENU is an innovative and effortless app that makes music happen. We
          connect musicians and venues, allowing you, the artist to plan your
          upcoming tour in the most uncomplicated way possible. No more juggling
          bookers and promoters. We’re cutting out the middlemen, and putting the
          creative freedom back in your hands. We’re also proud to be supporting
          local venues and beloved independent businesses by giving them the
          opportunity to find and book new and exciting entertainers to present. We
          love music, and we’re chuffed to help make the magic happen!
          <span className="slogan">Venu - When you wanna play</span>
        </p>
      </div>
      <div className="home-button-container">
        <Link to="/venues" className="button-link">
          <ReuseButton text="Venues" userType="venues" />
        </Link>
        <Link to="/artists" className="button-link">
          <ReuseButton text="Artists" userType="artists" />
        </Link>
      </div>
      <div className="home-map-container">
        {!isLoading && (
          <div ref={ref}>
            <Map users={fetchedLocations} />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Home;
