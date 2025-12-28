import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context";
import Layout from "./components/Layout/Layout";
import HomePage from "./features/home/HomePage";
import LoginPage from "./features/auth/LoginPage";
import NotFoundPage from "./features/error/NotFoundPage";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
