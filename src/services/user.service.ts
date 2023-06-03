import { instance } from "@/api/api.intercepter";
import { IUser } from "@/types/user.interface";

const USERS = "users";

type TypeData = {
  email: string;
  password?: string;
  name?: string;
  avatarPath?: string;
  phone?: string;
};

export const UserService = {
  async getProfile() {
    return instance<IUser>({
      url: `${USERS}/profile`,
      method: "GET",
    });
  },
  async updateProfile(data: TypeData) {
    return instance<IUser>({
      url: `${USERS}/profile`,
      method: "PUT",
      data,
    });
  },
  async toggleFavourite(productId: string | number) {
    return instance<IUser>({
      url: `${USERS}/profile/favourites/${productId}`,
      method: "PATCH",
    });
  },
};

export default UserService;
