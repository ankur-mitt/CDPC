import React from "react";
import { Route, Routes } from "react-router-dom";

import PlacementsModule from "./placements_module";
import ResourcesModule from "./resources_module";
import StaticModule from "./static_module"; 

import {Login} from "./common/Auth/Login";
import {SignUp} from "./common/Auth/SignUp";

function App() {
    return (
        <>
            <Routes>
                <Route path="/placements/*" element={<PlacementsModule />} />
                <Route path="/resources/*" element={<ResourcesModule />} />
                <Route path="/static/*" element={<StaticModule />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </>
    );
}

export default App;
