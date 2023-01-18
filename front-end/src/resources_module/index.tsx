import { Route, Routes } from "react-router-dom";

import CommonModule from "../common";
import ResourcesMainModule from "./main";
import ResourcesAddModule from "./main/addmodule";

const ResourcesModule = () => {
    return (
        <Routes>
            <Route path="/" element={<ResourcesMainModule />} />
            <Route path="/add" element={<ResourcesAddModule />} />
            <Route path="/test" element={<CommonModule />} />
        </Routes>
    );
};

export default ResourcesModule;
