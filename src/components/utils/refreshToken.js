import axios from "axios";
import { store } from "../../store";
import { loginUser } from "../../features/users/UsersSlice";

const refreshToken = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || !user.rToken) {
    throw new Error("No refresh token available");
  }

  try {
    const { data } = await axios.post(
      "https://www.chimetrading.com/api/chime/auth/refresh",
      { token: user.token },
      {
        headers: {
          Authorization: `Bearer ${user.rToken}`,
        },
      }
    );

    if (data?.code === 200) {
      const payload = {
        user: user.email,
        tokens: data?.data,
      };
      store.dispatch(loginUser(payload));
      console.log("Token refreshed successfully");

      localStorage.setItem(
        "user",
        JSON.stringify({
          ...user,
          token: data?.data.jwt,
          rToken: data?.data.refreshToken,
        })
      );

      return data.data;
    } else {
      throw new Error("Failed to refresh token");
    }
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw error;
  }
};

export default refreshToken;
