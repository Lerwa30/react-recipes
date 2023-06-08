import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";

const router = createBrowserRouter([
  { path: "/", element: <HomeScreen />},
  { path: "/newRecipe", element: <NewRecipeScreen />},
  { path: "/recipe:id", element: <DetailScreen />},


]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
