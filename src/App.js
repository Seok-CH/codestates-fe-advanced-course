import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Header from "./components/Header";
import Content from "./pages/Content";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=":postId" element={<Content />} />
        <Route path="/users/:userId" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
