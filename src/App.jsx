import { useState } from "react";
import "./App.css";
import { Auth } from "./layouts/Auth";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [isAuth, SetIsAuth] = useState(false);
  const handleLogin = () => {
    SetIsAuth(true);
  };
  return (
    <div>
      <BrowserRouter>
        {isAuth ? <Auth /> : <Login handleLogin={handleLogin} />}
      </BrowserRouter>
    </div>
  );
}

export default App;
