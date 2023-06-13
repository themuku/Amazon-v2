import { saveToStorage } from "./auth.helper";
import { getContentType } from "@/api/api.helper";
import { IAuthResponse, IEmailPassword } from "@/store/user/user.interface";
import axios from "axios";
import Cookies from "js-cookie";

export const AuthService = {
  async main(type: "login" | "register", data: IEmailPassword) {
    const response = await axios<IAuthResponse>({
      url: `http://localhost:3169/api/auth/${type}`,
      method: "POST",
      data,
    });

    if (response.data.accessToken) saveToStorage(response.data);

    return response.data;
  },

  async getNewTokens() {
    const refreshToken = Cookies.get("refreshToken");

    const response = await axios.post<string, { data: IAuthResponse }>(
      "http://localhost:3169/api/auth/login/access-token",
      { refreshToken },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.accessToken) saveToStorage(response.data);

    return response;
  },
};

export default AuthService;
