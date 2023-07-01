
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Redux-Thunk/pages/Home";
import Favorite from "./Redux-Thunk/pages/Favorite";
import Navebar from "./Redux-Thunk/Navbar/Navebar";
import { Provider } from "react-redux";
import store from "./Redux-Thunk/store/store";

function App() {
  return (
    <div >
      <Provider store={store} >
        <BrowserRouter>
          <Navebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </BrowserRouter>
      </Provider>


    </div>
  );
}
export default App;
