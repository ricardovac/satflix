import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Movies from "./pages/Movies";
import Friends from "./pages/Friends";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import { AiOutlineArrowLeft } from "react-icons/ai";
import PrivateRoutes from "./pages/Auth/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUp Icon={AiOutlineArrowLeft} />} />
        {/* <Route element={<PrivateRoutes />}> */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="movies" element={<Movies />} />
            <Route path="friends" element={<Friends />} />
          </Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
