import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";

function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default App;
