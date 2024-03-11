import { lazy, Suspense, useEffect } from "react";
import { useGetUsersQuery } from "../store/api";

const Layout = () => {
  const { isLoading, isError, isSuccess, data, error } = useGetUsersQuery();
  return <div>Layout</div>;
};

export default Layout;
