import { useContext, useEffect } from "react";
import { MainContext } from "../contexts/MainContext";
import { useNavigate, useParams } from "react-router-dom";

import { ScaleLoader } from "react-spinners";
import UserProfile from "../userProfile/UserProfile";

function WatchProfilePage({ userType }) {
  const { getWatchUser, watchUser, setGlobalUserType, isLoading, loggedInUser } =
    useContext(MainContext);
  // Get user ID from URL
  const { id: userID } = useParams();
  const navigate = useNavigate();

  // Get data from backend
  useEffect(() => {
    if (userID === loggedInUser._id) navigate("/me");
    window.scrollTo(0, 0);
    const controller = new AbortController();
    const signal = controller.signal;
    setGlobalUserType(userType);
    getWatchUser(userID, userType, signal);

    return () => {
      console.log("Cleaning up watchUserProfile...");
      controller.abort();
    };
  }, []);
  const spinnerOverride = {
    margin: "10rem 20rem",
    transform: "scale(2)",
  };
  // Show loading spinner while fetching from backend
  if (isLoading) {
    return (
      <ScaleLoader
        cssOverride={spinnerOverride}
        color={userType === "artists" ? "#0168b5" : "#b02476"}
        aria-label="Loading Spinner"
      />
    );
  }
  return <UserProfile user={watchUser} />;
}

export default WatchProfilePage;
