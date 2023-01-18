import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";

import PlacementsModule from "./placements_module";
import ResourcesModule from "./resources_module";
import StaticModule from "./static_module";

// import logo from "./logo.svg";

function App() {
    return (
        <ChakraProvider>
            <Routes>
                <Route path="/placements/*" element={<PlacementsModule />} />
                <Route path="/resources/*" element={<ResourcesModule />} />
                <Route path="/static/*" element={<StaticModule />} />
            </Routes>
        </ChakraProvider>
    );
}

export default App;
