import { useProfile } from "@/hooks/useProfile";
import UserService from "@/services/user.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FC } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const FavouriteButton: FC<{ productId: number }> = ({ productId }) => {
  const { profile } = useProfile();

  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ["toggle favourite"],
    () => UserService.toggleFavourite(productId),
    {
      onSuccess() {
        queryClient.invalidateQueries(["get profile"]);
      },
    }
  );

  const isExits = profile?.favourites.some(
    (favourite) => favourite.id === productId
  );

  return (
    <div>
      <button className="text-primary" onClick={() => mutate()}>
        {isExits ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
    </div>
  );
};

export default FavouriteButton;
