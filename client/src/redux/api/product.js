import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productAPI = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/product`,
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: () => "/",
      providesTags: ["product"],
    }),
    categories: builder.query({
      query: (category) => `/${category}`,
      providesTags: ["product"],
    }),
    featuredProducts: builder.query({
      query: (category) => `/${category}?limit=3`,
      providesTags: ["product"],
    }),
    searchProducts: builder.query({
      query: (title) => `/?title=${title}`,
      providesTags: ["product"],
    }),
  }),
});

export const {
  useAllProductsQuery,
  useCategoriesQuery,
  useFeaturedProductsQuery,
  useSearchProductsQuery,
} = productAPI;
