import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Choice from "../pages/Choice";
import Public from "../pages/public";
import Rooms from "../pages/rooms";
import { useAddMessageMutation, useGetPublicMessageQuery } from "../store/api";
import { ChatLayout } from "./ChatLayout";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/" element={<ChatLayout />}>
              <Route path="public" element={<Public />} />
              <Route path="rooms" element={<Rooms />} />
              <Route index element={<Choice />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
