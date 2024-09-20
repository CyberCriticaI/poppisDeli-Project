import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const breakfastMenu = {
    food: ["Pancakes", "Omelettes", "Fruit Salad"],
    drinks: ["Coffee", "Juice", "Tea"],
  };

  const lunchMenu = {
    food: ["Sandwiches", "Salads", "Pasta"],
    drinks: ["Soda", "Iced Tea", "Water"],
  };

  const midnightMenu = {
    food: ["Pizza", "Burgers", "Fries"],
    drinks: ["Beer", "Cocktails", "Soda"],
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
    isLoggedIn: false,
  });

  const [menu, setMenu] = useState({});

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 10) {
      setMenu(breakfastMenu);
    } else if (currentHour < 17) {
      setMenu(lunchMenu);
    } else {
      setMenu(midnightMenu);
    }
  }, []);

  const handleUserChange = () => {
    setUser((prevUser) => ({
      ...prevUser,
      isLoggedIn: true,
    }));
  };

  const handleUserNameChange = () => {
    setUser((prevUser) => ({
      ...prevUser,
      name: "Oswald Cobblepot",
    }));
  };

  const handleEmailChange = () => {
    setUser((prevUser) => ({
      ...prevUser,
      email: "oCobble@arkham.edu",
    }));
  };

  return (
    <>
      <button onClick={handleUserChange}>HandleMe</button>
      <button onClick={handleEmailChange}>Edit Email</button>
      <Navbar currentUser={user} />
  
      {/* Menu Display */}
      <div className="menu">
        <h2>Menu</h2>
        <div className="menu-section">
          <h3>Breakfast</h3>
          <ul>
            {breakfastMenu.food.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          <ul>
            {breakfastMenu.drinks.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div className="menu-section">
          <h3>Lunch</h3>
          <ul>
            {lunchMenu.food.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          <ul>
            {lunchMenu.drinks.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div className="menu-section">
          <h3>Dinner</h3>
          <ul>
            {midnightMenu.food.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          <ul>
            {midnightMenu.drinks.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;