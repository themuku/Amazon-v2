import { NextPageAuth } from "@/providers/auth-provider/auth-page.types";
import Home from "@/screens/home/Home";
import ProductService from "@/services/product/product.service";
import { IProduct, TypePaginationProducts } from "@/types/product.interface";
import { GetStaticProps, NextPage } from "next";

const HomePage: NextPage<TypePaginationProducts> = (data) => {
  return <Home products={data.products} length={data.length} />;
};

export const getStaticProps: GetStaticProps<
  TypePaginationProducts
> = async () => {
  const data = await ProductService.getAll({
    page: 1,
    perPage: 4,
  });

  return {
    props: data,
  };
};

export default HomePage;
