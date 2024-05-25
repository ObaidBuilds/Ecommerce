import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderAPI = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/order`,
  }),
  tagTypes: ["order"],
  endpoints: (builder) => ({
    allOrders: builder.query({
      query: () => "/",
      providesTags: ["order"],
    }),
    getOrderbyId: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["order"],
    }),
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: "/",
        method: "POST",
        body: newOrder,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useAllOrdersQuery,
  useGetOrderbyIdQuery,
  useCreateOrderMutation,
} = orderAPI;
