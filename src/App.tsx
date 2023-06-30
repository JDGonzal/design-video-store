import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Home, Login } from "@/pages";
import { AuthWrapper } from "./components";
import store from "@/redux/store";

function App() {
  const isAuthenticated = false;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<AuthWrapper isAuthenticated={isAuthenticated} />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
