import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { Home, Login, Register, Profile, Detail } from "./screens"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/login"} element={<Login /> } />
                <Route path={"/register"} element={<Register />} />
                <Route path={"/profile"} element={<Profile />} />
                <Route path={"/:movieid"} element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
