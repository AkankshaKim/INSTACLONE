// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Messages from "./Components/Messages";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/messages" element={<Messages />} />
            </Routes>
        </div>
    );
};

export default App;
