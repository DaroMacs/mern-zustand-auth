import React from "react";
import { loginRequest, profileRequest } from "../api/auth";
import useAuthStore from "../store/auth.store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("email"), formData.get("password"));
    const response = await loginRequest(
      formData.get("email") as FormDataEntryValue,
      formData.get("password") as FormDataEntryValue,
    );
    console.log(response);
    const token = response.data.token;
    setToken(token);
    const profileResponse = await profileRequest(token);
    console.log(profileResponse);
    setProfile(profileResponse.data.profile);
    navigate("/profile");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="*******" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
