import { lazy, Suspense, useEffect } from "react";
import { useGetUsersQuery } from "../store/api";

const Layout = () => {
  const { users, isLoading, isError } = useGetUsersQuery();
  console.log({ users });
  return <div>Layout</div>;
};

export default Layout;
