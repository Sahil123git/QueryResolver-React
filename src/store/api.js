import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const queryApi = createApi({
  reducerPath: "QueryResolverApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5009" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/allUsers",
      reducer: (state, action) => {
        // Store the fetched data in the Redux store
        // state.users = action.payload;
        console.log({ state, action });
      },
    }),
  }),
});

export const { useGetUsersQuery } = queryApi;
