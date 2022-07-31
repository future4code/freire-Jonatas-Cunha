import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import HomePage from "../pages/HomePage/HomePage";
import PostPage from "../pages/PostPage/PostPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import { RequireAuth } from "../components/RequireAuth/RequireAuth";
import { AuthRedirect } from "../components/AuthRedirect/AuthRedirect";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthRedirect>
          <LoginPage />
        </AuthRedirect>} />
        <Route path="/signup" element={<AuthRedirect>
          <SignUpPage />
        </AuthRedirect>} />
        <Route index element={
          <RequireAuth>
            <HomePage />
          </RequireAuth>} />
        <Route path="/post/:id" element={
          <RequireAuth>
            <PostPage />
          </RequireAuth>
        } />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;