import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { Home, Login, Signup } from "./pages";
import Navbar from "./components/navbar/Navbar";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/signin" />}
            />
            <Route
              path="/signin"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/signup"
              element={user ? <Navigate to="/" /> : <Signup />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
