import { getAccessTokens } from "./auth/auth.helper";
import { instance } from "@/api/api.intercepter";
import { IFullUser, IUser } from "@/types/user.interface";
import axios from "axios";

const USERS = "http://localhost:3169/api/users";

type TypeData = {
  email: string;
  password?: string;
  name?: string;
  avatarPath?: string;
  phone?: string;
};

export const UserService = {
  accessToken: getAccessTokens(),
  // prettier-ignore-start
  async getProfile() {
    return axios<IFullUser>({
      url: `${USERS}/profile`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
  },
  async updateProfile(data: TypeData) {
    return axios<IUser>({
      url: `${USERS}/profile`,
      method: "PUT",
      data,
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  async toggleFavourite(productId: string | number) {
    return axios<IUser>({
      url: `${USERS}/profile/favourites/${productId}`,
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${getAccessTokens()}`,
      },
    });
  },
};

// prettier-ignore-end

export default UserService;
