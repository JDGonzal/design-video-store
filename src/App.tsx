import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Home, Login } from "@/pages";
import { AuthWrapper, FeedTables } from "./components";
import store from "@/redux/store";

function App() {
  const isAuthenticated = false;
  return (
    <Provider store={store}>
      <FeedTables/>
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
