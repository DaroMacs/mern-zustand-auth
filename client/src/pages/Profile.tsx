import React from "react";
import useAuthStore from "../store/auth.store";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const setLogOut = useAuthStore((state) => state.setLogOut);
  const profile = useAuthStore((state) => state.profile);
  const navigate = useNavigate();
  return (
    <div>
      Profile
      <p>{JSON.stringify(profile)}</p>
      <button
        onClick={() => {
          setLogOut();
          navigate("/login");
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Profile;
