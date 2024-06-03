import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const queryApi = createApi({
  reducerPath: "chatApp",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5009" }),
  tagTypes: ["messages"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/allUsers",
      reducerPath: "users",
    }),
    getPublicMessage: builder.query({
      query: () => "/allPublicMessage",
      // reducerPath: "users",
      providesTags: ["messages"],
    }),
    addMessage: builder.mutation({
      query: (message) => ({
        url: "/message",
        method: "POST",
        body: message,
      }),
      invalidatesTags: ["messages"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetPublicMessageQuery,
  useAddMessageMutation,
} = queryApi;
