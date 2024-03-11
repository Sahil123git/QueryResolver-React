import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const queryApi = createApi({
  reducerPath: "QueryResolverApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:5009" }),
  endpoints: (builder) => ({
    getUsers: builder.query({ query: () => "/" }),
  }),
});
console.log({ queryApi });
export const { useGetUsersQuery } = queryApi;
