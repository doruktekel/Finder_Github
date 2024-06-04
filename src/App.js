import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import { GithubProvider } from "./context/GithubContext";
import { AlertProvider } from "./context/AlertContext";
import User from "./components/pages/User";

export default function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user/:login" element={<User />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </AlertProvider>
    </GithubProvider>
  );
}
