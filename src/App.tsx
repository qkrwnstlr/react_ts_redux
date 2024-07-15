import { Link, Route, Routes } from "react-router-dom";
import About from "./view/About";
import Home from "./view/Home";

const App: React.FC = () => {
  return (
    <>
      <div>
        &nbsp; &nbsp;
        <Link to="/">Home</Link>
        &nbsp; &nbsp;
        <Link to="/about">About</Link>
        &nbsp; &nbsp;
      </div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about/:value" Component={About} />
      </Routes>
    </>
  );
};

export default App;
