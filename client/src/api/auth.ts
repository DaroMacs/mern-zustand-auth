import authAxiosAPI from "../libs/axios";

const loginRequest = async (
  email: FormDataEntryValue,
  password: FormDataEntryValue,
) => {
  return authAxiosAPI.post("/login", { email, password });
};

const profileRequest = async (token: string) => {
  return authAxiosAPI.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { loginRequest, profileRequest };
