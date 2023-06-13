import { useProfile } from "@/hooks/useProfile";
import { NextPageAuth } from "@/providers/auth-provider/auth-page.types";
import Meta from "@/ui/Meta";
import Catalog from "@/ui/catalog/Catalog";
import Layout from "@/ui/layout/Layout";

const FavouritesPage: NextPageAuth = () => {
  const { profile } = useProfile();

  return (
    <Meta title="Favourites">
      <Layout>
        <Catalog products={profile?.favourites || []} title="Favourites" />
      </Layout>
    </Meta>
  );
};

FavouritesPage.isOnlyUser = true;

export default FavouritesPage;
