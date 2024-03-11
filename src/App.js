import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { queryApi } from "./store/api";
import Layout from "./layout";

const App = () => (
  <ApiProvider api={queryApi}>
    <Layout />
  </ApiProvider>
);

export default App;
