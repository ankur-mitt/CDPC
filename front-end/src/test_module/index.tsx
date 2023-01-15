import { Route, Routes } from "react-router-dom";

import TeamDetails from "../static_module/main/components/Team/TeamDetails";

const TestModule = () => {
    return (
        <Routes>
            <Route path="/team" element={<TeamDetails />} />
        </Routes>
    );
};

export default TestModule;
